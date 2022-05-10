const base = require('@playwright/test');
const { MainPage, AllProductsPage, ProductPage } = require('..');

const { expect } = base;

const test = base.test.extend({
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await use(mainPage);
  },
  allProductsPage: async ({ page }, use) => {
    const allProductsPage = new AllProductsPage(page);
    await use(allProductsPage);
  },
  productPage: async ({ page }, use) => {
    const productPage = new ProductPage(page);
    await use(productPage);
  },
});

module.exports = {
  test,
  expect,
};
