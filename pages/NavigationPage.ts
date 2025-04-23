import { Page, expect } from '@playwright/test';
import { BASE_URL } from '../utils/config';

export class NavigationPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTabs(): Promise<void> {
    await this.page.goto(BASE_URL);
    await this.page.click('text=Selenium');

    const menuItems: Record<string, string> = {
      'Flash Movie Demo': 'Flash Movie Demo',
      'Radio & Checkbox Demo': 'Radio Button & Check Box Demo',
      'Table Demo': 'Table Demo'
    };

    for (const [itemText, expectedTitle] of Object.entries(menuItems)) {
      await this.page.waitForSelector(`text=${itemText}`);
      await this.page.click(`text=${itemText}`);

      const title = await this.page.title();
      expect(title).toBe(expectedTitle);

      const fileName = itemText.toLowerCase().replace(/\s+/g, '_') + '.png';
      await this.page.screenshot({ path: `screenshots/${fileName}` });

      // Click the "Selenium" dropdown again to continue navigation
      await this.page.click('text=Selenium');
    }
  }
}
