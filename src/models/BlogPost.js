module.exports = (sequelize, DataTypes) => {
    const BlogPostsTable = sequelize.define('BlogPost', {
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
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      published: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated: {
        allowNull: false,
        type: DataTypes.DATE,
      }
    }, {
      tablename: 'categories',
      underscored: true,
      timestamps: false,
    })

    BlogPostsTable.associate = ({ User }) => {
      BlogPostsTable.belongsTo(User, {
        as: 'user_id',
        foreignKey: 'userId'
      });
    }
    return BlogPostsTable;
  };