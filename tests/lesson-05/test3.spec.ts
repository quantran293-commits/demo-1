import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Tài liệu học automation test - Playwright Việt Nam");

  await page.locator("//a[text()='Bài học 3: Todo page']").click();

 const input = page.locator("//input[@id='new-task']");
 const addTaskButton = page.locator("//button[@id='add-task']");

 for(let i = 0; i < 100; i++){
  await input.fill(`Todo ${i}`);
  await addTaskButton.click();
 }

const todos = page.locator('.todo-item');
let count = await todos.count();

for (let i = count - 1; i >= 0; i--) {
  const todo = todos.nth(i);
  const text = await todo.innerText();
  const number = parseInt(text.split(' ')[1]);

if (number % 2 !== 0) {
    page.on('dialog', async dialog => dialog.accept())
    await todo.locator(".//button[text()='Delete']").click();
  }
}
});
