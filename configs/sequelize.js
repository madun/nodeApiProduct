const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:@localhost:3306/dbmyappNodeJs');

module.exports = sequelize;