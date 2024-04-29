import { expect, test } from '@playwright/test';

test('svelte-4/getting-started page has expected h1', async ({ page }) => {
  await page.goto('/guide/svelte-4/getting-started');
  await expect(page.locator('h1')).toHaveText('Svelte Ant Design Icons: v1');
});

test('filled page has expected h1', async ({ page }) => {
  await page.goto('/filled-icons');
  await expect(page.locator('h1')).toHaveText('Filled Icons: Svelte Ant Design Icons');
});

test('outlined page has expected h1', async ({ page }) => {
  await page.goto('/outlined-icons');
  await expect(page.locator('h1')).toHaveText('Outlined Icons: Svelte Ant Design Icons');
});

test('two tone page has expected h1', async ({ page }) => {
  await page.goto('/twotone-icons');
  await expect(page.locator('h1')).toHaveText('Twotone Icons: Svelte Ant Design Icons');
});


