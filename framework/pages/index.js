const mainPage = require('./mainPage');
const allProductsPage = require('./allProductsPage');
const productPage = require('./productPage');

module.exports = {
  ...mainPage,
  ...allProductsPage,
  ...productPage,
};
