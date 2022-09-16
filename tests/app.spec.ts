import { test, expect } from '@playwright/test';
import { enterApp } from './utils';

test('enter app', async ({ page }) => {
  await enterApp(page);

  await expect(page).toHaveTitle(/deckjs app/);

  //
  // create a locator Hello, deckjs!
  const getStarted = page.locator('text=Hello, deckjs!');

  await expect(getStarted).toBeVisible();
});
