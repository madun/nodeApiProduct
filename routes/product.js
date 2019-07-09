const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const productController = require('../controllers/product');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', productController.getAllProduct);
// get one product
router.get('/:product_id', productController.getDetailProduct);
// post product POST /api/products gets JSON bodies
router.post('/', urlencodedParser, productController.storeProduct);
// update product
router.post('/:product_id', urlencodedParser, productController.updateProduct);
// delete product
router.post('/:product_id/destroy', urlencodedParser, productController.destroyProduct);

module.exports = router;