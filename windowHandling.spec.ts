import {test} from"@playwright/test";

test("Test to learn windows", async({page,context})=>{
await page.goto("https://www.leafground.com/window.xhtml")
await page.waitForTimeout(5000);
const newPagePromise = context.waitForEvent("page")
await page.locator("//h5[text()='Click and Confirm new Window Opens']/following-sibling::button").click();

const newPage = await newPagePromise;
await newPage.waitForLoadState();

await newPage.locator("//input[@id='email']").fill("indhuja1411@gmail.com")
await page.waitForTimeout(5000);
})