import LoginPage from 'D:/PLAYWRIGHT_AUTOMATION/tests/pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage';
import {test, expect} from '@playwright/test'
require('dotenv').config()

test('Loading Prakash Login Page',async ({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.navigate(process.env.PRAKASH_LOCAL_URL);
    await loginPage.enterEmail('admin');
    await loginPage.enterPassword('admin');
    await loginPage.clkLoginBtn();
    //const url = await loginPage.getURL();
    //expect(url).toBe('http://192.168.1.42:8585/my-data')
    const dashBoardPage=new DashboardPage(page)
    await dashBoardPage.clkServices()
    await page.waitForTimeout(10000);

});