exports.MyInfoPage = class MyInfoPage {

    constructor(page) {
        this.page = page;
        
        this.loading_spinner = page.locator('.oxd-loading-spinner');
        this.success_message = page.getByText('Success', { exact: true });

        this.header = page.locator('.oxd-topbar-header-breadcrumb h6');

        this.dateOfBirth = page.locator('//label[normalize-space()="Date of Birth"]/../following-sibling::div//input');
        this.dateOfBirth_selectedDay = page.locator('[class="oxd-calendar-date --selected"]');
        this.dateOfBirth_selectedYear = page.locator('[class="oxd-calendar-selector-year-selected"] > p');
        this.dateOfBirth_selectedMonth = page.locator('[class="oxd-calendar-selector-month-selected"] > p');
        // Personal Details save
        this.personalDetails_save = page.locator('.orangehrm-edit-employee-content > div > form > div > button');
    }

    async getSelectedDate() {
        await this.dateOfBirth.click();
        const year = await this.dateOfBirth_selectedYear.innerText;
        const month = await this.dateOfBirth_selectedMonth.innerText;
        const day = await this.dateOfBirth_selectedDay.innerText;
        return `${year}-${month}-${day}`;
    }
};
