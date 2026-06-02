class ApplyLeavePage {
  constructor(page) {
    this.page = page;
    this.Leavetracker_text = this.page.locator('//span[text()="Leave tracker"]');
    this.Leavedetails_text = this.page.locator('//span[text()="Leave Details"]');
    this.ApplyLeave_text = this.page.locator('//button[text()=" Apply Leave "]');
    this.Select_leave_type = this.page.locator('//select[@name="leaveTypeId"]');
    this.fromdate = this.page.locator('//input[@id="fromDate"]');
    this.Todate = this.page.locator('//input[@id="toDate"]');
    this.LeaveReason = this.page.locator('//textarea[@id="Leave_Reason"]');
    this.Applybutton = this.page.locator('//span[text()="Apply"]');
    this.Cancelbutton = this.page.locator('(//button[text()=" Cancel "])[1]');
  }

  async Click_LeaveTracker() {
    await this.Leavetracker_text.click();
  }

  async Click_leavedetails() {
    await this.Leavedetails_text.waitFor({ state: 'visible' });
    await this.Leavedetails_text.click();
  }

  async Click_ApplyLeave() {
    await this.ApplyLeave_text.click();
  }

  async SelelectLeaveType() {
    await this.Select_leave_type.selectOption({ label: 'Sick' });
  }

  async fromdate(date) {
    await this.fromdate.click();
    await this.page.locator(
      `//td[not(contains(@class,'disabled'))]//span[text()="${date}"]`
    ).click();
  }

  async Todate(date) {
    await this.Todate.click();
    await this.page.locator(
      `//td[not(contains(@class,'disabled'))]//span[text()="${date}"]`
    ).click();
  }

  async LeaveReason(reason) {
    await this.LeaveReason.fill(reason);
  }
}

module.exports = { ApplyLeavePage };
