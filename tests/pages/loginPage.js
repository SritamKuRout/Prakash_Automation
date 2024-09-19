const BasePage=require('D:/PLAYWRIGHT_AUTOMATION/tests/pages/basePage.js');

class LoginPage extends BasePage {
    constructor(page){
        super(page);
      this.emailInput =  page.locator('#email');
      this.passwordInput= page.locator('#password')
      this.loginBtn = page.locator('button[data-testid="login"]')
    }

    async enterEmail(email){
         await this.emailInput.fill(email)
    }
    async enterPassword(password){
      await this.passwordInput.fill(password)
    }
    async clkLoginBtn(){
      await this.loginBtn.click()
    }

}

module.exports=LoginPage;