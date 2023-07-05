module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Category', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      name: DataTypes.STRING,
    }, {
      tablename: 'categories',
      underscored: true,
      timestamps: false,
    })
  };