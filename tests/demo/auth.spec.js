import { test } from '@playwright/test';
import { LoginRetest } from '../../pages/login_2';
import fs from 'fs';

const testData = JSON.parse(fs.readFileSync('./utils/testData.json'));

test('login and save data', async ({ page }) => {
  const login = new LoginRetest(page);

  await login.gotoLoginPage();
  await login.Login(testData.validUser.username, testData.validUser.password);
  await page.waitForURL('**/inventory.html'); 
  await page.context().storageState({ path: 'auth.json' });


  // Save login session into auth.json
  // await page.context().storageState({ path: 'auth.json' });
});
