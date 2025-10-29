import { expect} from '@playwright/test';
import { test } from '../../pages/fixture';
test('checking fixtures',async({loggedInPage}) =>{
    await expect(loggedInPage.locator('.shopping_cart_link')).toBeVisible();
    await expect(loggedInPage.locator('.complete-header')).toHaveText('Thank you for your order!');
});