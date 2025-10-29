exports.CartPage = class CartPage{

  constructor(page){
    this.page = page;
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.checkfirstName = page.locator('[data-test="firstName"]');
    this.checklastName = page.locator('[data-test="lastName"]');
    this.checkpostalCode = page.locator('[data-test="postalCode"]');
    this.checkContinue = page.locator('[data-test="continue"]');
    this.checkFinish = page.locator('[data-test="finish"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartItem = page.locator('.cart_item');
  }

async addItems() {
  await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await this.page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await this.page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
};
 async addItemByName(productName) {
    const locatorMap = {
      "Sauce Labs Backpack": '[data-test="add-to-cart-sauce-labs-backpack"]',
      "Sauce Labs Bike Light": '[data-test="add-to-cart-sauce-labs-bike-light"]',
      "Sauce Labs Bolt T-Shirt": '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]',
      "Sauce Labs Fleece Jacket": '[data-test="add-to-cart-sauce-labs-fleece-jacket"]'
    };
const locator = locatorMap[productName];
if(!locator){
  throw new Error(`Product "${productName}" not found in locator map`);
}

  await this.page.locator(locator).click();
}
 async verifyCartCount(expect, expectedCount) {
    await expect(this.cartBadge).toHaveText(expectedCount.toString());
  }

async verifyItems(expect){
await this.cartLink.click();
const cartCount = await this.cartItem.count();
await expect(this.cartBadge).toHaveText(cartCount.toString());
}

async goCheckOut(firstName,lastName,postalCode){
  await this.cartLink.click();
  await this.checkoutButton.click();
  await this.checkfirstName.fill(firstName);
  await this.checklastName.fill(lastName);
  await this.checkpostalCode.fill(postalCode);
  await this.checkContinue.click();
  await this.checkFinish.click();
  }
  async checkOutt(){
     await this.cartLink.click();
  await this.checkoutButton.click();
  await this.checkContinue.click();
  await this.checkFinish.click();
  }
}