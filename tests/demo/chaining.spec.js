import {test, expect} from '@playwright/test'
import { CartPage } from '../../pages/cart';
import { LoginRetest } from '../../pages/login_2';
import fs from 'fs'
const testData = JSON.parse(fs.readFileSync('./utils/testData.json'));
test('use fake store API chaining ', async({page, request}) => {
  const carts = new CartPage(page)
  const Login = new LoginRetest(page)
    const productResponse = await request.get('https://fakestoreapi.com/products')
    expect(productResponse.status()).toBe(200)
    const productData = await productResponse.json();
    const firstProduct = await productData[0];
    console.log('first producct title ',firstProduct.title);
    const productMap = {
    "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops":"Sauce Labs Backpack",
    "Mens Cotton Jacket":"Sauce Labs Fleece Jacket",
    "Mens Casual Premium Slim Fit T-Shirts":"Sauce Labs Bolt T-Shirt",
    "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet":"Sauce Labs Bike Light"
  };
  const uiProduct = productMap[firstProduct.title];
   
  await Login.gotoLoginPage();
  await Login.Login(testData.validUser.username, testData.validUser.password);
if(uiProduct){
    await carts.addItemByName(uiProduct);
  await carts.verifyCartCount(expect, 1);
  } else {
    console.log(`No matching UI product found for API product: ${firstProduct.title}`);
    
  }

});