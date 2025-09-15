import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login'
import fs from 'fs';
const testData = JSON.parse(fs.readFileSync('C:/Playwright_pom_demo/utils/testData.json'));
test('test', async ({ page }) => {
  const Login = new LoginPage(page)

  await Login.gotoLoginPage()
  await Login.login(testData.validUser.username, testData.validUser.password);
  // await expect(page.locator)
  // await page.goto('https://the-internet.herokuapp.com/login');
  // await page.getByRole('textbox', { name: 'Username' }).click();
  // await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  // await page.getByRole('textbox', { name: 'Password' }).click();
  // await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  // await page.getByRole('button', { name: ' Login' }).click();
});
test('Invalid User', async ({ page }) => {
  const Login = new LoginPage(page)
  await Login.gotoLoginPage()
  await Login.login(testData.invalidUser.username, testData.invalidUser.password);
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/login')
  await expect(page.locator('#flash')).toContainText('username is invalid')

});
test('Empty Credentials', async({page}) =>{
  const Login = new LoginPage(page)
  await Login.gotoLoginPage()
  await Login.login(testData.emptycredUser.username, testData.emptycredUser.password);
});