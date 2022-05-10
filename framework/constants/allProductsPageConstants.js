// Content
const PRODUCT_TITLE = 'The Miracle System';
const BUTTON_NAME = 'customize';

// Selectors
const PRODUCT_CARD =
  '.product-list-item.undefined.product-list-item--hover .product-list-item__info';
const PRODUCT_CARD_TITLE = `.products-list-grid .product-list-item.undefined.product-list-item--hover .product-list-item__info h3:has-text('${PRODUCT_TITLE}')`;
const PRODUCT_CARD_CUSTOMIZE_BUTTON = `.product-list-item.undefined.product-list-item--hover .product-list-item__info a:has-text('${BUTTON_NAME}')`;

module.exports = {
  PRODUCT_TITLE,
  BUTTON_NAME,
  PRODUCT_CARD_TITLE,
  PRODUCT_CARD_CUSTOMIZE_BUTTON,
};
