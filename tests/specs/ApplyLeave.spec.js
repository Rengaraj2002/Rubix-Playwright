const { test, expect } = require('@playwright/test');
const { ApplyLeavePage } = require('../../src/pages');
const { LoginPage } = require('../../src/pages');
const { ezhour } = require('../fixtures/userData');

test('Apply leave', async ({ page }) => {
  const Login = new LoginPage(page);
  await Login.gotoezhour();
  await Login.login(ezhour.username, ezhour.password);
  const Leave = new ApplyLeavePage(page);
  await Leave.clickLeaveTracker();
  await Leave.clickLeaveDetails();
  await Leave.clickApplyLeave();
  await Leave.selectLeaveType();
  await Leave.selectFromDate('7');
  await Leave.selectToDate('7');
  await Leave.fillLeaveReason('Personal work');
  await page.pause();
});