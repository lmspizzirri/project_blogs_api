module.exports = (sequelize, DataTypes) => {
    const PostCategoryTable = sequelize.define('PostCategory', {
            postId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            },
            categoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
    },}, {
      tablename: 'posts_categories',
      underscored: true,
      timestamps: false,
    })

    PostCategoryTable.associate = ({ BlogPost, Category }) => {
      Category.belongsToMany(BlogPost, {
        through: PostCategoryTable,
        foreignKey: 'categoryId',
        otherKey: 'postId'
      });
      BlogPost.belongsToMany(Category, {
        through: PostCategoryTable,
        foreignKey: 'postId',
        otherKey: 'categoryId'
      });
    }
    return PostCategoryTable;
  };