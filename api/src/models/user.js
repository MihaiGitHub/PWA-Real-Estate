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

class User extends Model {}
User.init(
  {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    type: DataTypes.STRING,
    validated: DataTypes.INTEGER,
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    description: DataTypes.TEXT,
    picture: DataTypes.STRING,
    location: DataTypes.STRING,
    lat: DataTypes.STRING,
    lng: DataTypes.STRING,
    phone: DataTypes.STRING,
    fax: DataTypes.STRING,
    license_number: DataTypes.STRING,
    business_name: DataTypes.STRING,
    timestamp: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: "user",
    tableName: "users"
  }
);

module.exports = User;
