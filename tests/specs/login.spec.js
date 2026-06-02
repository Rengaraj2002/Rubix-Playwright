

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../src/pages');
const { ezhour } = require('../fixtures/userData');

test('Login', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoezhour();
  await expect(page).toHaveURL(ezhour.url);
  await expect(page).toHaveTitle('EzHour');
  await login.login(ezhour.username, ezhour.password);
});