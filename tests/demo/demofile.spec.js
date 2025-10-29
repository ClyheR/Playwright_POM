import { test, expect } from '@playwright/test';

test('Check if user is already logged in', async ({ page }) => {
  // This should directly take you to inventory page (no login form)
  await page.goto('https://www.saucedemo.com/inventory.html');  // Go directly to products page
  await expect(page.locator('.title')).toHaveText('Products');

  // Check if inventory page is visible
  await expect(page.locator('.title')).toHaveText('Products');
});
test('Second test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.title')).toHaveText('Products');
});
