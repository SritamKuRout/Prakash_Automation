require('dotenv').config()

const{test,expect} = require('@playwright/test')

console.log(process.env.BASE_URL)

test('Loading prakash.ai page',async ({page})=>{

    await page.goto(process.env.BASE_URL)
     const title = await page.title()
     await page.waitForTimeout(5000)
     console.log(title)
})