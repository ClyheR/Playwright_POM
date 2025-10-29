import {test,expect} from '@playwright/test'
import { LoginRetest } from '../../pages/login_2'
import fs from 'fs';
import { CartPage } from '../../pages/cart';
const testData = JSON.parse(fs.readFileSync('./utils/testData.json'));  //login credentials 

test('login test',async({page}) =>{
    const Login= new LoginRetest(page) // goes to login_2.js to get the data which redirects it to the testData.json
    const Cart_open= new CartPage(page) // goes to cart.js for adding and checking out from the page 

    await Login.gotoLoginPage() //this will push to the login page in the website 
    await Login.Login(testData.validUser.username, testData.validUser.password) // adds the username and password 
    // await page.pause()  // pauses the page 
    await Cart_open.addItems(); //adds items this is the function being called from the cart file
    await Cart_open.verifyItems(expect);
    // await page.locator('[data-test="shopping-cart-link"]').click();
    // const CartPage = await page.locator('.Cart_items').count();
    // await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveText(CartPage.toString());
    await Cart_open.goCheckOut(testData.checkOutData.firstName, testData.checkOutData.lastName, testData.checkOutData.postalCode); //goes to checkout



})