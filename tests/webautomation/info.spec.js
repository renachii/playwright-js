import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/orangehrm/loginpage';
import { HomePage } from '../../pages//orangehrm/homepage';
import { MyInfoPage } from '../../pages/orangehrm/myinfopage';


test.describe('My Info', () => {
    let date;
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);    
        await loginPage.gotoLoginPage();
        await loginPage.login('Admin', 'admin123');
    });
    
    test.afterEach(async ({ page }) => {
        const homePage =  new HomePage(page);
        await homePage.logout();
    });
    
    test('should be able to go to My Info page', async ({ page }) => {
        const homePage =  new HomePage(page);
        const myInfoPage =  new MyInfoPage(page);
        
        await homePage.myInfo_menu.click();
        await expect(myInfoPage.header).toContainText('PIM');
        await expect(myInfoPage.dateOfBirth).toBeVisible;
    });

    test('should be able to update Date of Birth field', async ({ page }) => {
        const homePage =  new HomePage(page);
        const myInfoPage =  new MyInfoPage(page);

        await homePage.myInfo_menu.click();
        date = '1990-10-10';
        
        await myInfoPage.dateOfBirth.fill(date);
        await myInfoPage.personalDetails_save.click();

        await expect(myInfoPage.success_message).toBeVisible;
        await expect(myInfoPage.loading_spinner).toHaveCount(0);
    });
});