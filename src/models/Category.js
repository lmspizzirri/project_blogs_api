module.exports = (sequelize, DataTypes) => {
    const categoryTable = sequelize.define('Category', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      }
      }, {
      tablename: 'categories',
      underscored: true,
      timestamps: false,
    })

    return categoryTable;
  };