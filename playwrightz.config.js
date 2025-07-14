// @ts-check
import { defineConfig, devices } from '@playwright/test';

/** 
* @see https://playwright.dev/docs/test-configuration
*/ 
const config = ({
  testDir: './tests',
  retries: 1,
  timeout: 40 * 1000,
  expect : {  
    timeout: 5000,
  },
  reporter : 'html',
  projects: [
    {
      name: 'safari',
      use: {
  browserName: 'webkit',
  screenshot: 'only-on-failure',
  trace: 'retain-on-failure',
  //...devices['iPhone 11'],
  headless: false,
  },
    },
        {
      name: 'chrome',
      use: {
  browserName: 'chromium',
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  trace: 'retain-on-failure', 
  viewport: {width: 720, height: 720},
  headless: false,
  },
    }
  ],

  
});
module.exports = config
