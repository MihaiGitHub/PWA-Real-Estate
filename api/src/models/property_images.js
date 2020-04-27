const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL)

class PropertyImages extends Model {}

PropertyImages.init({
    uid: DataTypes.INTEGER,
    pid: DataTypes.STRING,
    url: DataTypes.STRING,
    type: DataTypes.STRING
}, { 
    sequelize,
    modelName: 'PropertyImages',
    tableName: 'properties_images'
});

module.exports = PropertyImages
