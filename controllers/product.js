const Products = require("../models/product");

const products = [];



exports.getAddProducts = (req, res, next) => {
    res.render('admin/add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }

exports.postAddProducts = (req, res, next) => {
    const product = new Products(req.body.title);
    product.save()
    products.push({ title: req.body.title });
    res.redirect('/');
  }


  exports.getProducts = (req, res, next) => {
   Products.fetchProduct(products =>{
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
   });
   
  }