const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../src/pages');
const { DashboardPage } = require('../../src/pages');
const { ezhour } = require('../fixtures/userData');

test('apply_permission', async ({ page }) => {
  const Login = new LoginPage(page);
  await Login.gotoezhour();
  await Login.login(ezhour.username, ezhour.password);

  const apply_permission = new DashboardPage(page);

  await apply_permission.click_attendance();
  await apply_permission.click_myrequest();
  await apply_permission.click_permission();
  await apply_permission.click_apply_button();
  await apply_permission.choose_permission_type();

  await apply_permission.Choose_date('5');

    // await page.pause();


    

})