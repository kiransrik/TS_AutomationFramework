import { test } from '@playwright/test';
import { NavigationPage } from '@pages/NavigationPage';

test('Navigation tabs work correctly', async ({ page }) => {
  const navigationPage = new NavigationPage(page);
  await navigationPage.navigateTabs();
});
