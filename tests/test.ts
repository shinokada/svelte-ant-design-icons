import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Svelte Ant Design Icons' })).toBeVisible();
});

test('Filled page has expected h1', async ({ page }) => {
  await page.goto('/filled');
  await expect(
    page.getByRole('heading', { name: 'Svelte Ant Design Icons: Filled' })
  ).toBeVisible();
});

test('Outlined page has expected h1', async ({ page }) => {
  await page.goto('/outlined');
  await expect(
    page.getByRole('heading', { name: 'Svelte Ant Design Icons: Outlined' })
  ).toBeVisible();
});

test('Twotone page has expected h1', async ({ page }) => {
  await page.goto('/twotone');
  await expect(
    page.getByRole('heading', { name: 'Svelte Ant Design Icons: Twotone' })
  ).toBeVisible();
});
