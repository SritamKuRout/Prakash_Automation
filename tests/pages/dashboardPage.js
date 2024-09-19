const BasePage=require('D:/PLAYWRIGHT_AUTOMATION/tests/pages/basePage.js');

class DashboardPage extends BasePage {
    constructor(page){
        super(page);
      this.services = page.locator('//button[span[text()="Services"]]')
    }

    async clkServices(){
      await this.services.click()
    }

}

module.exports=DashboardPage;