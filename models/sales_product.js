const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class SalesProduct extends Sequelize.Model {}

SalesProduct.init({
  quantity: Sequelize.INTEGER,
  price: Sequelize.INTEGER,
}, { sequelize, modelName: 'salesproduct' });

module.exports = SalesProduct;