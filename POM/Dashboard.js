const { Page } = require('@playwright/test');

class Dashboard {
    /** 
       * @param {Page} page
        */

    constructor(page) {
        this.page = page;
        this.attendance = page.locator('//span[text()="Attendance"]');
        this.My_request = page.locator('//span[text()="My request"]');
        this.permission = page.locator('//span[text()="Permission"]');
        this.Apply_permission = page.locator('//button[text()=" Apply "]');
        this.permission_type = page.locator('//select[@name="PermissionType"]');
        this.Date = page.locator('//input[@id="PermissionRequest_PermissionOn"]')

    }

    async click_attendance() {

        await this.attendance.click();
    }

    async click_myrequest() {
        await this.My_request.click();
    }

    async click_permission() {
        await this.permission.click()
    }

    async click_apply_button() {
        await this.Apply_permission.click();
    }

    async choose_permission_type() {
        await this.permission_type.selectOption("Permission");
    }

    async Choose_date(date) {
        
          await this.Date.click();

     this.page.locator(
      `//td[not(contains(@class,'disabled'))]//span[text()="${date}"]`
    ).click();

    
    }




}
module.exports = { Dashboard }