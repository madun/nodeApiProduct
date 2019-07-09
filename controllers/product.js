const Product = require('../models/product');
const Sales = require('../models/sales');
const SalesProduct = require('../models/sales_product');
module.exports.getIndexProduct = (req, res) => {

    // sequelize use "Javascript Promise"
    // It Is Asynchronous
    Sales
        .findOne({
            where: {
                id: 1
            },
            include: [{
                model: SalesProduct,
                where: {
                    id: 1
                },
                include: [{
                    model: Product
                }]
            }]
        })
        .then((sales) =>{
            res.json(sales);
        })
        .catch((error) => {
            console.log(error)
        });
}