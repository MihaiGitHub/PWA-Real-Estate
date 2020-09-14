const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

class PropertyImages extends Model {}

PropertyImages.init(
  {
    uid: DataTypes.INTEGER,
    pid: DataTypes.STRING,
    url: DataTypes.STRING,
    type: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "PropertyImages",
    tableName: "properties_images",
  }
);

module.exports = PropertyImages;
