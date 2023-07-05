module.exports = (sequelize, DataTypes) => {
    const blogPostsTable = sequelize.define('BlogPost', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING,
      }
    }, {
      tablename: 'categories',
      underscored: true,
      timestamps: false,
    })

    return blogPostsTable;
  };