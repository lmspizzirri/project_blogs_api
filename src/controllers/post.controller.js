const postService = require('../services/post.service');

const getAll = async (_req, res) => {
    const { type, message } = await postService.getAll();
    return res.status(type).json(message);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await postService.getById(id);
    return res.status(type).json(message);
};

const createPost = async (req, res) => {
    const postInfo = req.body;
    const token = req.headers.authorization;
    const { type, message } = await postService.createPost(postInfo, token);
    return res.status(type).json(message);
};

const delelePost = async (req, res) => {
    const { id } = req.params;
    const token = req.headers.authorization;
    const { type, message } = await postService.deletePost(id, token);
    if (type) { return res.status(type).json(message); }
    return res.status(204).end();
};

const updatePost = async (req, res) => {
    const { id } = req.params;
    const postInfo = req.body;
    const token = req.headers.authorization;
    const { type, message } = await postService.updatePost(id, token, postInfo);
    const updatedPost = await postService.getById(+id);
    if (type) { return res.status(type).json(message); }
    return res.status(200).json(updatedPost.message);
};

module.exports = { createPost, getAll, getById, updatePost, delelePost };