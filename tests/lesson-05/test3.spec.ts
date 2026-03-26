import { test, expect } from '@playwright/test';

test('Todo test', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  await expect(page).toHaveTitle("Tài liệu học automation test - Playwright Việt Nam");

  await page.locator("//a[text()='Bài học 3: Todo page']").click();

  async function addNewTask(content: string, times: number) {
    for (let i = 1; i <= times; i++) {
      await page.fill("#new-task", `${content} ${i}`);
      await page.click("#add-task");
    }
  }

  async function deleteNewTask() {
    const locatorTaskList = page.locator("//ul[@id='task-list']/li/span");
    const count = await locatorTaskList.count();

    let conterArr: string[] = [];

    for (let i = 0; i < count; i++) {
      const content = await locatorTaskList.nth(i).innerText();

      let num = parseInt(content.replace(/[^0-9]/g, ''));
      if (num % 2 !== 0) {
        conterArr.push(content);
      }
    }

    console.log(conterArr);

    for (let i = 0; i < conterArr.length; i++) {
      const locatorDelete = `//li//span[text()="${conterArr[i]}"]/../div//button[text()="Delete"]`;

      await page.locator(locatorDelete).waitFor({ state: 'visible' });

      page.once('dialog', async dialog => {
        await dialog.accept();
      });

      await page.click(locatorDelete);
    }
  }

  await test.step('Thêm 100 todo', async () => {
    await addNewTask("Todo", 100);
  });

  await test.step("Xóa các todo số lẻ", async () => {
    await deleteNewTask();
  });
});