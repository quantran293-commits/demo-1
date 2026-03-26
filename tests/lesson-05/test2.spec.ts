import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/ ');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Tài liệu học automation test - Playwright Việt Nam");

  await page.locator("//a[text()='Bài học 2: Product page']").click();

  await page.locator("//div[text()='Product 1']//following-sibling::button[text()='Add to Cart']").click({clickCount: 2});
  await page.locator("//div[text()='Product 2']//following-sibling::button[text()='Add to Cart']").click({clickCount: 3});
  await page.locator("//div[text()='Product 3']//following-sibling::button[text()='Add to Cart']").click({clickCount: 1});

});
