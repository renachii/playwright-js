exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page;

        // header
        this.header = page.getByRole('heading');
        this.user_menu = page.locator('.oxd-userdropdown-icon');
        this.logout_button = page.getByRole('menuitem', { name: 'Logout' });

        // menus
        this.myInfo_menu = page.locator('//a[@class="oxd-main-menu-item"]/span[normalize-space()="My Info"]');

    }

    async logout(){
        await this.user_menu.click();
        await this.logout_button.click();
    }
};