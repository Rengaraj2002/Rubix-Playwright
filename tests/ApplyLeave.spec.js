const { test, expect } = require('@playwright/test');
const { ApplyLeavePage } = require('../src/pages');
const { LoginPage } = require('../src/pages');

test('Apply leave', async ({ page }) => {
  const Login = new LoginPage(page);
  await Login.gotoezhour();
  await Login.login('rengaraj.k@rubixtek.com', 'Raj@0077');
  const Leave = new ApplyLeavePage(page);
  await Leave.Click_LeaveTracker();
  await Leave.Click_leavedetails();
  await Leave.Click_ApplyLeave();
  await Leave.SelelectLeaveType();
  await Leave.fromdate('7');
  await Leave.Todate('7');
  await Leave.LeaveReason('Personal work');
  await page.pause();
});