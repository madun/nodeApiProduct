const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const homeRouter = require('./routes/home');
const productRouter = require('./routes/product');

const sequelize = require('./configs/sequelize');

const Product = require('./models/product');
const Sales = require('./models/sales');
const SalesProduct = require('./models/sales_product');
const User = require('./models/user');

// association betweens Models
Sales.hasMany(SalesProduct);
SalesProduct.belongsTo(Product);

app.use(homeRouter);
app.use('/product', productRouter);

app.listen(3000, () => {
    console.log('server started');
    sequelize.sync();
})