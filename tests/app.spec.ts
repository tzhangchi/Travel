import { test, expect } from '@playwright/test';
import { enterApp } from './utils';

test('enter app', async ({ page }) => {
  await enterApp(page);

  await expect(page).toHaveTitle(/deckjs app/);
});
