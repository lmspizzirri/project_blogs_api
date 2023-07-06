const { BlogPost, Category, PostCategory, User } = require('../models');
const { decodeToken } = require('../utils/JWT');

const getAll = async () => {
    const allPosts = await BlogPost.findAll({ include: [{ 
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
    },
    { model: Category,
      as: 'categories',
    },
] });
    return { type: 200, message: allPosts };
};

const getById = async (id) => {
    const post = await BlogPost.findByPk(id, {
        include: [{ 
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
    },
    { model: Category,
      as: 'categories',
    },
] });
    if (!post) { return { type: 404, message: { message: 'Post does not exist' } }; }
    return { type: 200, message: post };
};

const createPost = async (postInfo, token) => {
    const { title, content, categoryIds } = postInfo;
    const categoryById = await Category.findAll({ where: { id: categoryIds } });
    const idList = categoryById.map((el) => el.id);
    if (categoryIds.some((id) => !idList.includes(id))) {
        return { type: 400, message: { message: 'one or more "categoryIds" not found' } };
    }
    const published = new Date();
    const { id: userId } = decodeToken(token);
    const newPost = await BlogPost
        .create({ title, content, categoryIds, userId, published, updated: published });
    categoryIds.map(async (category) => PostCategory
        .create({ postId: newPost.id, categoryId: category }));
    return { type: 201, message: newPost };
};

const deletePost = async (id, token) => {
    const { id: userId } = decodeToken(token);
    const findPost = await BlogPost.findByPk(id);
    if (!findPost) { return { type: 404, message: { message: 'Post does not exist' } }; }
    if (findPost.userId !== userId) {
        return { type: 401, message: { message: 'Unauthorized user' } };
    }
    await BlogPost.destroy({ where: { id } });
    return { type: null };
};

const updatePost = async (id, token, postInfo) => {
    const { id: userId } = decodeToken(token);
    const findPost = await BlogPost.findByPk(id);
    if (!findPost) { return { type: 404, message: 'Post does not exist' }; }
    if (findPost.userId !== userId) {
        return { type: 401, message: { message: 'Unauthorized user' } };
    }
    await BlogPost.update(postInfo, { where: { id } });
    return { type: null };
};

module.exports = { createPost, getAll, getById, updatePost, deletePost };