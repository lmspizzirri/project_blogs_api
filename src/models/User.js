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

  return UsersTable;
};