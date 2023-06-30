module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.DATE,
    image: DataTypes.BOOLEAN
  }, {
    tablename: 'users',
    underscored: true
  })
};