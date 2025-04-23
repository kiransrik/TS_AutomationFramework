import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true,
    video: 'on', // Record video for every test
    viewport: { width: 1280, height: 720 },
    launchOptions: {
      slowMo: 0,
    },
    trace: 'on-first-retry',
  },
  testDir: './tests',
  outputDir: 'videos/', // Saves videos here
});
