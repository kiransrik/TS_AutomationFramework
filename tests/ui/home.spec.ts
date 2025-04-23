import { test } from '@playwright/test';
import { HomePage } from '@pages/HomePage';

test('Homepage loads correctly and has expected title', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.load();
  await homePage.verifyHomepageTitle();
});
