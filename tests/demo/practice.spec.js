import { test } from '@playwright/test';
import { LoginRetest } from '../../pages/login_2';
import { CartPage } from '../../pages/cart';
import fs from 'fs';

const dataAll = JSON.parse(fs.readFileSync('./utils/dataALL.json'));

for (const data of dataAll) {
  test(`Login for ${data.username}`, async ({ page }) => {
    const login = new LoginRetest(page);
    const cart = new CartPage(page);

    await login.gotoLoginPage();
    await login.Login(data.username, data.password);

    
  });
}
