import { expect, test } from '@playwright/test';
const title = 'Filled Icons - Svelte Ant Design Icons'
const description = 'Easily Find & Copy Svelte Ant Design Filled SVG Icon name for Your Project.'
const ogUrl = 'http://localhost:4173/filled-icons'
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-ant-design-icons?title=Filled Icons'

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('/filled-icons');
});

test('Filled Icons page has expected h1, meta title', async ({ page }) => {
  await expect(
    page.getByRole('heading', { name: title })
  ).toBeVisible();
});

test('Filled Icons page has expected meta title', async ({ page }) => {
  await expect(page).toHaveTitle(title);
});

test('Filled Icons page has expected meta description', async ({ page }) => {
  const metaDescription = page.locator('meta[name="description"]');
  await expect(metaDescription).toHaveAttribute('content', description);
});

test('Filled Icons page has expected meta og', async ({ page }) => {
  const metaOgTitle = page.locator('meta[property="og:title"]');
  await expect(metaOgTitle).toHaveAttribute('content', title);
  const metaOgDescription = page.locator('meta[property="og:description"]');
  await expect(metaOgDescription).toHaveAttribute('content', description);
  const metaOgUrl = page.locator('meta[property="og:url"]');
  await expect(metaOgUrl).toHaveAttribute('content', ogUrl);
  const metaOgImage = page.locator('meta[property="og:image"]');
  await expect(metaOgImage).toHaveAttribute(
    'content',
    imgUrl
  );
});

test('Filled Icons page has expected meta twitter', async ({ page }) => {
  const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
  await expect(metaTwitterTitle).toHaveAttribute('content', title);
  const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
  await expect(metaTwitterDescription).toHaveAttribute(
    'content',
    description
  );
  const metaTwitterImage = page.locator('meta[name="twitter:image"]');
  await expect(metaTwitterImage).toHaveAttribute(
    'content',
    imgUrl
  );
});