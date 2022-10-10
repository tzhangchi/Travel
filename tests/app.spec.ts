import { test, expect } from '@playwright/test';
import { enterApp } from './utils';

test('enter app', async ({ page }) => {
  await enterApp(page);

  await expect(page).toHaveTitle(/deckjs/);
  // https://playwright.dev/docs/api/class-locator
  const title = page.locator('#title');
  const inputValue = await title.inputValue();
  await expect(inputValue).toEqual(
    'Building decks and blocks , presentation like a doc'
  );
});

test('enter app, click text', async ({ page }) => {
  await enterApp(page);

  await expect(page).toHaveTitle(/deckjs/);

  const title = page.locator('#title');

  await expect(title).toBeVisible();

  await title.click();
});
