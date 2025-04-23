import { Page, expect } from '@playwright/test';
import { BASE_URL } from '../utils/config';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async load(): Promise<void> {
    await this.page.goto(BASE_URL);
    const title = await this.page.title();
    const filename = title.toLowerCase().replace(/\s+/g, '_') + '.png';
    await this.page.screenshot({ path: `screenshots/${filename}` });
  }

  async verifyHomepageTitle(): Promise<void> {
    const title = await this.page.title();
    expect(title).toContain('Guru99');

    const missingElement = this.page.locator('text=NonExistentElement');
    const count = await missingElement.count();
    expect(count).toBe(0); // No unexpected element
  }
}
