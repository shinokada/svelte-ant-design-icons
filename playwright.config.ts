import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'npm run build && npm run preview',
    timeout: 600000,
    port: 4173
  },

  testDir: 'e2e'
});
