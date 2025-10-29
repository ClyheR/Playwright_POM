import {test, expect} from '@playwright/test'
import dotenv from 'dotenv'
import path from 'path'
import { stringify } from 'querystring';
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });
const baseURL = process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
const username = process.env.USERNAME || 'Admin';
const password = process.env.PASSWORD || 'admin123';
test.only('visit link', async ({ page }) => {
  await page.goto(baseURL);
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Login' }).click();

  // Assertions for OrangeHRM
  await expect(page).toHaveURL(/.*dashboard/);
  await expect(page.locator('h6:has-text("Dashboard")')).toBeVisible();
});
// test('[@smoke]visit link',async({page}) => {

// })
// test('[@regression] add to cart', async ({page})=>{

// })