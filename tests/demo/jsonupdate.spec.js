import {test, expect} from '@playwright/test'
import { CartPage } from '../../pages/cart'
import { LoginRetest } from '../../pages/login_2'
import fs from 'fs'
const postalData =  JSON.parse(fs.readFileSync('./utils/dataAll.json','utf-8'));
for(const data of postalData){
    test(`Checkout Flow test ${data.firstName}`,async({page})=>{
        const login = new LoginRetest(page);
    const cart = new CartPage(page);

    await login.gotoLoginPage();
    await login.Login(data.username, data.password);
    await cart.addItems();
    await cart.goCheckOut(data.firstName, data.lastName, data.postalCode);
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
    });

}