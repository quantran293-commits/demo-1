import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/ ');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Tài liệu học automation test - Playwright Việt Nam");

  await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();

  await page.locator("//input[@id='username']").fill("Quan Tran");
  await page.locator("//input[@id='email']").fill("quantran293@gmail.com");
  await page.locator("//input[@id='male']").check();
  await page.locator("//select[@id='interests']").selectOption(["Technology", "Art"]);
  await page.locator("//select[@id='country']").selectOption("Canada");
  await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-05/data/demo.txt");
  await page.locator("//textarea[@id='bio']").fill("testing");

 await page.locator("//button[text()='Register']").click();

});
