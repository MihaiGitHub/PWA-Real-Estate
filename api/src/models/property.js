const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL)
const PropertyImages = require('./property_images')

class Property extends Model {}

Property.init({
    title: DataTypes.STRING,
    property_status: DataTypes.STRING,
    property_type: DataTypes.STRING,
    description: DataTypes.STRING,
    features: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
    price: DataTypes.STRING,
    bedrooms: DataTypes.STRING,
    bathrooms: DataTypes.STRING,
    garages: DataTypes.STRING,
    build_size: DataTypes.STRING,
    video: DataTypes.STRING,
    address: DataTypes.STRING,
    lang: DataTypes.STRING,
    description: DataTypes.STRING
}, { 
    sequelize, 
    modelName: 'property' 
});

Property.hasMany(PropertyImages, { foreignKey: 'pid' })

module.exports = Property