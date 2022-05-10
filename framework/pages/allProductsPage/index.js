const { expect } = require('@playwright/test');

const {
  PRODUCT_CARD_TITLE,
  PRODUCT_CARD_CUSTOMIZE_BUTTON,
} = require('../../constants');

class AllProductsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
    this.productCard = this.page.locator(PRODUCT_CARD_TITLE);
    this.productCardButton = this.page.locator(PRODUCT_CARD_CUSTOMIZE_BUTTON);
    // this.mainPageTitle = this.page.locator('.panel .panel-heading').first();
  }

  async hoverOnProductCard() {
    await this.productCard.hover();
  }

  async clickOnProductCardButton() {
    await this.productCardButton.click();
  }
}

module.exports = {
  AllProductsPage,
};
