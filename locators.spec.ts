import {test} from "@playwright/test";

test("To verify the credentials", async({page})=>{
await page.goto("https://leaftaps.com/opentaps/control/main"); //load the url

//enter username
await page.getByRole("textbox",{name:'Username'}).fill("Demosalesmanager");

//enter password
await page.getByRole("textbox",{name:'Password'}).fill("crmsfa"); //should inspect where we enter value

//click login button
await page.getByRole("button",{name:'Login'}).click();

//waitTime

await page.waitForTimeout(2000);
})

