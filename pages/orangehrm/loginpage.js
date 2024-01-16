exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.username_textbox = page.locator('input[name=username]');
        this.password_textbox = page.locator('input[name=password]');
        this.login_button = page.locator('.orangehrm-login-button');
    }

    async gotoLoginPage(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/');
    }

    async login(username, password){
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }
};