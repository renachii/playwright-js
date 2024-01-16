import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/orangehrm/loginpage';
import { HomePage } from '../../pages/orangehrm/homepage';

test.beforeEach(async ({ page }) => {    
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
});

test.describe('Login Page', () => {
    test('should be able to successfully login into the admin panel', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const homePage =  new HomePage(page);

        await loginPage.login('Admin', 'admin123');

        await expect(homePage.header).toBeVisible;
        await expect(homePage.header).toContainText('Dashboard');
        await expect(homePage.user_menu).toBeVisible;
        await expect(homePage.user_menu).not.toEqual('');
    });    
});