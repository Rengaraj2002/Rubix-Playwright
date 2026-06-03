const { test, expect } = require('@playwright/test');
const { ApplyLeavePage, LoginPage } = require('../../src/pages');
const { ezhour } = require('../fixtures/userData');

test('Apply leave', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoezhour(ezhour.url);
  await login.login(ezhour.username, ezhour.password);
  const leave = new ApplyLeavePage(page);
  await leave.clickLeaveTracker();
  await leave.clickLeaveDetails();
  await leave.clickApplyLeave();
  await expect(leave.applyButton).toBeVisible();
  await leave.selectLeaveType();
  await leave.selectFromDate('7');
  await leave.selectToDate('7');
  await leave.fillLeaveReason('Personal work');
  await expect(leave.leaveReasonInput).toHaveValue('Personal work');
});