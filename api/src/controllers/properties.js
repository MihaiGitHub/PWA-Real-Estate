const Property = require("../models/property");
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

exports.list = async (req, res) => {
  try {
    const properties = await Property.findAll({ include: [PropertyImages] });

    res.status(200).send(properties);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.search = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query(
      "SELECT *, ( 6371 * acos( cos( radians( :lat ) ) * cos( radians( `lat` ) ) * cos( radians( `lng` ) - radians( :long ) ) + sin(radians(:lat)) * sin(radians(`lat`)) )) `distance` FROM properties HAVING `distance` < 50 ORDER BY `distance` LIMIT 25",
      {
        replacements: {
          lat: parseFloat(req.query.lat),
          long: parseFloat(req.query.lng),
        },
      }
    );

    res.status(200).json({
      results,
    });
  } catch (e) {
    res.status(500).json(e);
  }
};
