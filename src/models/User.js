module.exports = (sequelize, DataTypes) => {
  const UsersTable = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.BOOLEAN
  }, {
    tablename: 'users',
    underscored: true,
    timestamps: false,
  })

  UsersTable.associate = ({ BlogPost }) => {
    UsersTable.hasMany(BlogPost, {
      as: 'blogPosts',
      foreignKey: 'id',
    });
  }

  return UsersTable;
};