const BasePage=require('../pages/basePage.js');

class DataBasesPage extends BasePage {
    constructor(page){
        super(page);
        this.sqlDatabaseLink = page.locator('text=SQL_DABASE');
        this.deleteButton = page.locator('[data-testid="service-delete"]');
        this.confirmationInput = page.locator('[data-testid="confirmation-text-input"]');
        this.confirmButton = page.locator('[data-testid="confirm-button"]');
        this.addButton = page.locator('[data-testid="add-placeholder-button"]');
    }

    async clkDatabase(){
      await this.sqlDatabaseLink.click();
    }

    async deleteDatabase(){
        await this.deleteButton.click();
    }

    async enterDelete(){
        await this.confirmationInput.fill('DELETE');
    }

    async confirmDelete(){
        await this.confirmButton.click();
    }

    async addService(){
        await this.addButton.click();
    }

}

module.exports=DataBasesPage;