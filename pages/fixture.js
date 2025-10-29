import { test as base } from '@playwright/test'
import {expect} from '@playwright/test'
import { LoginRetest } from './login_2';
import { CartPage } from './cart';
import fs from 'fs'
const testData = JSON.parse(fs.readFileSync('./utils/testData.json'));
export const test = base.extend({
    loggedInPage: async ({ page }, use) => {
        const Login = new LoginRetest(page)
        const carts = new CartPage(page)
        await Login.gotoLoginPage();
        await Login.Login(testData.validUser.username, testData.validUser.password)
        //  await page.pause();
        await page.waitForURL('**/inventory.html');
        await carts.addItems();
        // await page.pause();
        await carts.verifyItems(expect);
        await carts.goCheckOut(testData.checkOutData.firstName,testData.checkOutData.lastName,testData.checkOutData.postalCode);
        await use(page);
    }
});