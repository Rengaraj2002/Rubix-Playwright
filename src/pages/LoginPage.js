class LoginPage {
  constructor(page) {
    this.page = page;
    this.usermail = page.locator('//input[@placeholder="User name or email *"]');
    this.password = page.locator('//input[@placeholder="Password *"]');
    this.login_submit = page.locator('//button[text()="Log in"]');
  }

  async gotoezhour(url) {
    await this.page.goto(url);
  }

  async login(username, password) {
    await this.usermail.fill(username);
    await this.password.fill(password);
    await this.login_submit.click();
  }
}

module.exports = { LoginPage };
