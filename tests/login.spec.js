

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../src/pages');

test('Login', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoezhour();
  await expect(page).toHaveURL('https://rubixtek.ezhour.com/account/login');
  await expect(page).toHaveTitle('EzHour');
  await login.login('rengaraj.k@rubixtek.com', 'Raj@0077');
});