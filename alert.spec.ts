import test from "@playwright/test";

test("Test to learn alert using switchcase", async({page})=>{

await page.goto("https://leafground.com/alert.xhtml");
page.on("dialog", async(dialogAlert)=>{
    switch(dialogAlert.type()){
        case "alert":
            dialogAlert.dismiss();
            break;
   
        case "confirm":
            dialogAlert.dismiss();
            break;

        case "prompt":
            dialogAlert.accept("Indhu");
            break;

    default:
        dialogAlert.dismiss();
        break;

    }
});

//Simple alert
await page.locator("//span[text()='Show']").first().click();

//confirm alert
await page.locator("//span[text()='Show']").nth(1).click();


//prmopt alert
await page.locator("//span[text()='Show']").nth(4).click();


await page.waitForTimeout(10000);

});