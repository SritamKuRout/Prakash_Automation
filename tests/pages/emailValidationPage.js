const BasePage=require('../pages/basePage.js');

class EmailValidationPage extends BasePage {
    constructor(page){
        super(page);
      this.emails = page.locator('input[name="email"]')
      this.submitButton = page.locator('button[type="submit"][form="totp-form"]');
      this.codeInput = page.locator('input[name="code"]');
      this.signInButton = page.locator('button[type="submit"][form="code-form"]');
      
    }

    async fillEmail(email){
      await this.emails.fill(email);
    }

    async clickSubmit(){
        await this.submitButton.click();
    }

    async enterCode(code){
        await this.codeInput.fill(code);
    }

    async clickSignInButton(){
        await this.signInButton.click();
    }

}

module.exports=EmailValidationPage;