import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/orangehrm/loginpage';
import { HomePage } from '../../pages/orangehrm/homepage';

test.beforeEach(async ({ page }) => {    
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('Admin', 'admin123');
});

test.describe('Logout', () => {
    test('should be able to logout from the admin panel', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const homePage =  new HomePage(page);

        await homePage.logout();

        await expect(loginPage.login_button).toBeVisible;
    });
});