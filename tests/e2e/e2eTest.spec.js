import { test, expect, chromium } from '@playwright/test';
import LoginPage from 'D:/PLAYWRIGHT_AUTOMATION/tests/pages/loginPage.js';
import DashboardPage from 'D:/PLAYWRIGHT_AUTOMATION/tests/pages/dashboardPage.js';
import DataBasesPage from '../pages/databasesPage';
require('dotenv').config();

let browser;
let context;
let page;
let loginPage;
let dashBoardPage;
let databasePage;

test.describe('Prakash Application Tests', () => {

    test.beforeAll(async () => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        loginPage = new LoginPage(page);
        dashBoardPage = new DashboardPage(page);
        databasePage = new DataBasesPage(page);

        await loginPage.navigate(process.env.PRAKASH_LOCAL_URL);
        await loginPage.enterEmail('admin');
        await loginPage.enterPassword('admin');
        await loginPage.clkLoginBtn();
        await page.waitForURL('http://192.168.1.42:8585/my-data');
        const url = await loginPage.getURL();
        await expect(url).toBe('http://192.168.1.42:8585/my-data');
    });

    test.afterAll(async () => {
        await browser.close();
    });

    test.skip('Remove Services', async () => {
        await dashBoardPage.clkServices();
        await databasePage.clkDatabase();
        await databasePage.deleteDatabase();
        await databasePage.enterDelete();
        await databasePage.confirmDelete();
        //await page.waitForTimeout(10000);

    });

    test('Create Database service',async()=>{
        await dashBoardPage.clkServices();
        await databasePage.addService();
       // await page.waitForTimeout(10000);
    })

});
