import {test, expect} from '@playwright/test'
const testUser = [
    { username: 'standard_user', password: 'secret_sauce', tag: '@smoke' },
    { username: 'problem_user', password: 'secret_sauce', tag: '@regression' },
    { username: 'performance_glitch_user', password: 'secret_sauce', tag: '@sanity' }
];
for(const user of testUser){
    test(`${user.tag}- login test for ${user.username}`,async ({page}) =>{
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill(user.username);
        await page.locator('[data-test="password"]').fill(user.password);
        await page.locator('[data-test="login-button"]').click();
        await expect(page).toHaveURL(/inventory/);
    } )
}