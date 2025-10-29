import { test, expect } from '@playwright/test'
import { LoginRetest } from '../../pages/login_2';
import fs from 'fs'
import { CartPage } from '../../pages/cart';
const testData = JSON.parse(fs.readFileSync('./utils/testData.json'));

test('API Chaining test', async ({ page, request }) => {
  const carts = new CartPage(page)
  const items = await request.get('https://fakestoreapi.com/products');
  expect(items.status()).toBe(200);
  const itemsData = await items.json();
  const firstItem = itemsData[0];
  console.log(`the items are ${firstItem.title}`);
  const productMap = {
    "Fjallraven Backpack": "Sauce Labs Backpack",
    "Mens Casual Premium Jacket": "Sauce Labs Fleece Jacket",
    "Mens Casual Slim Fit T-Shirts": "Sauce Labs Bolt T-Shirt",
    "Mens Cotton Jacket": "Sauce Labs Bike Light"
  };
  const uiProduct = productMap[firstItem.title];
  const Login = new LoginRetest(page)
  await Login.gotoLoginPage();
  await Login.Login(testData.validUser.username, testData.validUser.password);
  if(uiProduct){
    await carts.addItemByName(uiProduct);
  await carts.verifyCartCount(expect, 1);
  } else {
    console.log(`No matching UI product found for API product: ${firstItem.title}`);
    
  }
  // api + ui 
});
