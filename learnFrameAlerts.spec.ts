import test from "@playwright/test";

test("Test to learnFrameAlerts", async({page})=>{
await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
page.on("dialog", async(dialogAlert)=>{
     await dialogAlert.accept();
     console.log("alert accepted")
     //await page.waitForTimeout(5000);
});
const frame1 = page.frameLocator("//iframe[@id='iframeResult']");
await frame1.locator("//h2[text()='JavaScript Confirm Box']/following-sibling::button").click();
await page.waitForTimeout(2000);
console.log("button is clicked");
});
