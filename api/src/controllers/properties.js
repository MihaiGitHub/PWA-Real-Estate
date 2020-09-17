const Property = require("../models/property");
const PropertyImages = require("../models/property_images");

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

    res.status(200).json(properties);
  } catch (e) {
    res.status(500).json(e);
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

    return Promise.all(
      results.map(async (property, index) => {
        const [imageresults, metadata] = await sequelize.query(
          "SELECT url, default_picture FROM properties_images WHERE pid = :pid ORDER BY default_picture DESC",
          {
            replacements: {
              pid: property.id,
            },
          }
        );

        property.PropertyImages = imageresults;

        return property;
      })
    ).then((results) => {
      res.status(200).json({
        results,
      });
    });
  } catch (e) {
    res.status(500).json(e);
  }
};
