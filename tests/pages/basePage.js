
class BasePage {
    constructor(page){
        this.page=page

    }
    async navigate(url){
        await this.page.goto(url);
    }

    async getTitle(){
     return await this.page.title();
    }

    async getURL(){
        return await this.page.url()
    }

}

module.exports=BasePage;