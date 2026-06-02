class ApplyLeavePage {
  constructor(page) {
    this.page = page;
    this.leaveTrackerText = this.page.locator('//span[text()="Leave tracker"]');
    this.leaveDetailsText = this.page.locator('//span[text()="Leave Details"]');
    this.applyLeaveButton = this.page.locator('//button[text()=" Apply Leave "]');
    this.leaveTypeSelect = this.page.locator('//select[@name="leaveTypeId"]');
    this.fromDateInput = this.page.locator('//input[@id="fromDate"]');
    this.toDateInput = this.page.locator('//input[@id="toDate"]');
    this.leaveReasonInput = this.page.locator('//textarea[@id="Leave_Reason"]');
    this.applyButton = this.page.locator('//span[text()="Apply"]');
    this.cancelButton = this.page.locator('(//button[text()=" Cancel "])[1]');
  }

  async clickLeaveTracker() {
    await this.leaveTrackerText.click();
  }

  async clickLeaveDetails() {
    await this.leaveDetailsText.waitFor({ state: 'visible' });
    await this.leaveDetailsText.click();
  }

  async clickApplyLeave() {
    await this.applyLeaveButton.click();
  }

  async selectLeaveType(type = 'Sick') {
    await this.leaveTypeSelect.selectOption({ label: type });
  }

  async selectFromDate(date) {
    await this.fromDateInput.click();
    await this.page.locator(`//td[not(contains(@class,'disabled'))]//span[text()="${date}"]`).click();
  }

  async selectToDate(date) {
    await this.toDateInput.click();
    await this.page.locator(`//td[not(contains(@class,'disabled'))]//span[text()="${date}"]`).click();
  }

  async fillLeaveReason(reason) {
    await this.leaveReasonInput.fill(reason);
  }
}

module.exports = { ApplyLeavePage };
