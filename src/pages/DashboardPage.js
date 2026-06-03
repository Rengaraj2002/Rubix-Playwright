class DashboardPage {
  /**
   * @param {Page} page
   */
  constructor(page) {
    this.page = page;
    this.attendance = page.locator('//span[text()="Attendance"]');
    this.myRequest = page.locator('//span[text()="My request"]');
    this.permission = page.locator('//span[text()="Permission"]');
    this.applyPermission = page.locator('//button[text()=" Apply "]');
    this.permissionType = page.locator('//select[@name="PermissionType"]');
    this.permissionDate = page.locator('//input[@id="PermissionRequest_PermissionOn"]');
  }

  async clickAttendance() {
    await this.attendance.click();
  }

  async clickMyRequest() {
    await this.myRequest.click();
  }

  async clickPermission() {
    await this.permission.click();
  }

  async clickApplyButton() {
    await this.applyPermission.click();
  }

  async choosePermissionType() {
    await this.permissionType.selectOption('Permission');
  }

  async chooseDate(date) {
    await this.permissionDate.click();
    await this.page.locator(
      `//td[not(contains(@class,'disabled'))]//span[text()="${date}"]`
    ).click();
  }
}

module.exports = { DashboardPage };
