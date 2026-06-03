const { test, expect } = require('@playwright/test');
const { LoginPage, DashboardPage } = require('../../src/pages');
const { ezhour } = require('../fixtures/userData');

test('apply_permission', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoezhour(ezhour.url);
  await login.login(ezhour.username, ezhour.password);

  const dashboard = new DashboardPage(page);

  await dashboard.clickAttendance();
  await dashboard.clickMyRequest();
  await dashboard.clickPermission();
  await dashboard.clickApplyButton();
  await dashboard.choosePermissionType();

  await expect(dashboard.permissionDate).toBeVisible();
  await dashboard.chooseDate('5');

    // await page.pause();


    

})