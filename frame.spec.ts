import { test } from '@playwright/test';

//test('Test to learn frame', async ({ page }) => {
  //await page.goto('https://leafground.com/frame.xhtml'); // URL Load
  //const frameReference = page.frameLocator('[src="default.xhtml"]');
  //await frameReference.getByRole('button', { name: 'Click Me' }).click();
  //await page.waitForTimeout(5000);
//});

test ('nested frames with frameLocator', async ({ page }) => {
  await page.goto('https://leafground.com/frame.xhtml'); // URL Load
  const outerFrame = page.frameLocator('[src="page.xhtml"]'); //stored by using ref outerframe 
  const innerFrame = outerFrame.frameLocator('[src="framebutton.xhtml"]'); //stored by using ref innerframe 
  await innerFrame.getByRole('button', { name: 'Click Me' }).click();
  await page.waitForTimeout(5000);
});

