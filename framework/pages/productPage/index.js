const { expect } = require('@playwright/test');

const {
  // DEV_MAIN_PAGE_URL,
  // ALL_PRODUCTS_BUTTON,
  // CLOSE_POP_UP_BUTTON,
} = require('../../constants');

class ProductPage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
    this.colorButton = this.page.locator('.pdp-selection-filters__item');
    this.shadeColorButton = this.page.locator(
      `(//*[@class="pdp-selection-level__row pdp-selection-level-row"])[1]/div[@class="pdp-selection-level-row__img"]`,
    );
    this.toneColorButton = this.page.locator(
      `(//*[@class="pdp-selection-level__row pdp-selection-level-row"])[2]/div[@class="pdp-selection-level-row__img"]`,
    );
    // this.closePopUpButton = this.page.locator(CLOSE_POP_UP_BUTTON).first();
    // this.mainPageTitle = this.page.locator('.panel .panel-heading').first();
  }

  async getElementsAmount(elemLocator) {
    return elemLocator.count();
  }

  async getRandomValue(elemLocator) {
    let elementsAmount = await this.getElementsAmount(elemLocator);
    let x = Math.floor(Math.random() * elementsAmount + 1);

    return x;
  }

  async SelectColorType() {
    let elementId = this.getRandomValue(this.colorButton);
    let elementLocator = `.pdp-selection-filters__item:nth-child(${await elementId})`;

    await this.page.locator(elementLocator).click();
  }

  async SelectColorShade() {
    let shadeElementId = this.getRandomValue(this.shadeColorButton);
    let shadeElementLocator = `.pdp-selection-level:nth-child(1) .pdp-selection-level-row__img:nth-child(${await shadeElementId})`;

    await this.page.locator(shadeElementLocator).click();
    let altText = await this.page
      .locator(shadeElementLocator + ' img')
      .getAttribute('alt');

    let text = altText.split('- ');
    let altTextValue = text[0];

    let selectedColorShadeName = this.page
      .locator('span.pdp-selection-level-header__name')
      .first();

    await expect(selectedColorShadeName).toHaveText(altTextValue);
  }

  async SelectColorTone() {
    let toneElementId = this.getRandomValue(this.toneColorButton);
    let toneElementLocator = `.pdp-selection-level:nth-child(2) .pdp-selection-level-row__img:nth-child(${await toneElementId})`;

    await this.page.locator(toneElementLocator).click();
    let altText = await this.page
      .locator(toneElementLocator + ' img')
      .getAttribute('alt');

    let text = altText.split(' +');
    let altTextValue = text[1];

    let selectedColorToneName = this.page
      .locator('span.pdp-selection-level-header__name')
      .nth(1);

    await expect(selectedColorToneName).toHaveText(altTextValue);
  }
}

module.exports = {
  ProductPage,
};
