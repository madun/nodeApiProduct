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
            res.status(200).json(sales);
        })
        .catch((error) => {
            console.log(error)
        });
}

module.exports.getAllProduct = (req, res) => {
    Product.findAll()
    .then((product) => {
        res.status(200).json(product);
    })
    .catch((error) => {
        console.log(error)
    });
}

module.exports.getDetailProduct = (req, res) => {
    Product.findOne({
        where: {
            id: req.params.product_id
        }
    })
    .then((product) => {
        res.status(200).json(product);
    })
    .catch((error) => {
        console.log(error)
    });
} 

module.exports.storeProduct = (req, res) => {
    Product.create({
        name: req.body.name,
        price: req.body.price,
    })
    .then((product) => {
        res.status(200).json({
            msg: 'Product Created',
            product: product
        });
    })
    .catch((error) => {
        console.log(error)
    });
} 

module.exports.updateProduct = (req, res) => {
    Product.findOne({
        where: {
            id: req.params.product_id
        }
    })
    .then((product) => {
        if(!product){
            return res.status(404).json({
                msg: 'Product Not Found'
            });
        }

        product.name = req.body.name;
        product.price = req.body.price;
        product.save();
        
        return res.status(200).json({
            msg: 'Product Updated',
            product: product
        });
    })
    .catch((error) => {
        console.log(error)
    });
} 


module.exports.destroyProduct = (req, res) => {
    Product.destroy({
        where: {
            id: req.params.product_id
        }
    })
    .then((product) => {
        res.status(200).json({
            msg: 'Product Deleted'
        });
    })
    .catch((error) => {
        console.log(error)
    });
} 