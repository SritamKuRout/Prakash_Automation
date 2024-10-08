import { test, expect, chromium } from '@playwright/test';
import LoginPage from '../pages/loginPage.js';
import DashboardPage from '../pages/dashboardPage.js';
import DataBasesPage from '../pages/databasesPage.js';
import EmailValidationPage from '../pages/emailValidationPage.js';
import readline from 'readline';
import dotenv from 'dotenv';

dotenv.config();

let browser;
let context;
let page;
let loginPage;
let dashBoardPage;
let databasePage;
let emailPage;

function getOTP() {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        rl.question('Please enter the code you received: ', (answer) => {
            console.log(`You entered: ${answer}`);
            rl.close();
            resolve(answer);  // Resolve the promise with the user's input
        });
    });
}

test.describe('Prakash Application Tests', () => {

    test.beforeAll(async () => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        loginPage = new LoginPage(page);
        dashBoardPage = new DashboardPage(page);
        databasePage = new DataBasesPage(page);
        emailPage = new EmailValidationPage(page);

        await loginPage.navigate(process.env.CLOUDFLARE_URL);
        await emailPage.fillEmail('sritamkumar.rout@datavizz.in');
        await emailPage.clickSubmit();

        console.log('Waiting for OTP input...');
        const code = await getOTP();  // Using readline for OTP input
        console.log('Received OTP:', code);

        await emailPage.enterCode(code);
        await emailPage.clickSignInButton();
        await loginPage.enterEmail('admin');
        await loginPage.enterPassword('admin');
        await loginPage.clkLoginBtn();
        await page.waitForURL('http://192.168.1.54:8585/my-data');
        const url = await loginPage.getURL();
        await expect(url).toBe('http://192.168.1.54:8585/my-data');
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
    });

    test('Create Database service', async () => {
        await dashBoardPage.clkServices();
        await databasePage.addService();
    });

});
