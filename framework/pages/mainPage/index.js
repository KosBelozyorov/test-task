const { expect } = require('@playwright/test');

const {
  DEV_MAIN_PAGE_URL,
  ALL_PRODUCTS_BUTTON,
  CLOSE_POP_UP_BUTTON,
} = require('../../constants');

class MainPage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
    this.allProductsButton = this.page.locator(ALL_PRODUCTS_BUTTON);
    this.closePopUpButton = this.page.locator(CLOSE_POP_UP_BUTTON).first();
    // this.mainPageTitle = this.page.locator('.panel .panel-heading').first();
  }

  async goto() {
    await this.page.goto(DEV_MAIN_PAGE_URL);
  }

  async closePopUpWindow() {
    await this.closePopUpButton.waitFor('visible');
    await this.closePopUpButton.click();
  }

  async clickAllProductsButton() {
    await this.allProductsButton.click();
  }
}

module.exports = {
  MainPage,
};
