import { type Page } from '@playwright/test';
const defaultApp = 'http://localhost:5173/';

export async function enterApp(page: Page) {
  await page.goto(`${defaultApp}`);
}
