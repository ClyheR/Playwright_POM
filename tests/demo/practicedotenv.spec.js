import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

const baseURL = process.env.BASE_URL;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

if (!baseURL || !username || !password) {
  throw new Error(
    'Missing required environment variables. Ensure BASE_URL, USERNAME and PASSWORD are set (for example in a .env file).'
  );
}

test('Environment Variables Check', async ({ page }) => {
  console.log('BASE_URL:', baseURL);
  console.log('USERNAME:', username);
  console.log('PASSWORD:', password);

  await page.goto(baseURL);
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/inventory/);
});
