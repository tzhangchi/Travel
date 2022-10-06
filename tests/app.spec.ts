import { test, expect } from '@playwright/test';
import { enterApp } from './utils';

test('enter app', async ({ page }) => {
  await enterApp(page);

  await expect(page).toHaveTitle(/deckjs/);

  //
  // create a locator Hello, deckjs!
  const getStarted = page.locator(
    'text=Building decks and blocks , presentation like a doc'
  );

  await expect(getStarted).toBeVisible();
});

test('enter app, click text', async ({ page }) => {
  await enterApp(page);

  await expect(page).toHaveTitle(/deckjs/);

  //
  // create a locator Hello, deckjs!
  const getStarted = page.locator(
    'text=Building decks and blocks , presentation like a doc'
  );

  await expect(getStarted).toBeVisible();

  await getStarted.click();
});
