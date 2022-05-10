const { test, expect } = require('../framework/fixtures');

test.beforeEach(async ({ mainPage }) => {
  await mainPage.goto();
});

test('Test task', async ({ mainPage, allProductsPage, productPage }) => {
  test.slow();

  await mainPage.clickAllProductsButton();
  await allProductsPage.hoverOnProductCard();
  await mainPage.closePopUpWindow();
  await allProductsPage.clickOnProductCardButton();

  await productPage.SelectColorType();
  await productPage.SelectColorShade();
  await productPage.SelectColorTone();
});
