exports.CartPage = class CartPage{

  constructor(page){
    this.page = page;
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartItem = page.locator('.cart_item');
  }

async addItems() {
  await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await this.page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await this.page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
};

async verifyItems(expect){
await this.cartLink.click();
const cartCount = await this.cartItem.count();
await expect(this.cartBadge).toHaveText(cartCount.toString());
}

async goCheckOut(){
  await this.cartLink.click();
  await this.checkoutButton.click();

}
}