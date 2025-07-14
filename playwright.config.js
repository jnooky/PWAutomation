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
  reporter : 'allure-playwright',
  use: {
  browserName: 'chromium',
  screenshot: 'only-on-failure',
  trace: 'retain-on-failure',
  headless: true,
  },

  
});
module.exports = config
