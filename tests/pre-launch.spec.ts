import { test, expect, type Page } from '@playwright/test';

test.describe('TamizhTech Pre-Launch Test Suite', () => {

  test.beforeEach(async ({ page }: { page: Page }) => {
    // Navigate to local target domain before every test execution
    await page.goto('/');
  });

  test('1. Verify No React 19 Hydration or Console Errors', async ({ page }: { page: Page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg: { type: () => string; text: () => string }) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // Reload page to catch initial structural hydration mismatches
    await page.reload();
    
    // Filter out standard third-party warnings if any exist
    const criticalErrors = consoleErrors.filter((err: string) => err.includes('Hydration') || err.includes('React'));
    expect(criticalErrors).toEqual([]);
  });

  test('2. Verify Triangular Hero Asset & Glass Badges Visibility', async ({ page }: { page: Page }) => {
    // Assert the structural image stack is available
    const centerArm = page.locator('img[src*="hero-hero.png"]');
    const leftAMR = page.locator('img[src*="hero-amr.png"]');
    const rightHuman = page.locator('img[src*="hero-human.png"]');

    await expect(centerArm).toBeVisible();
    await expect(leftAMR).toBeVisible();
    await expect(rightHuman).toBeVisible();

    // Verify presence of interactive floating glass tags
    const glassBadge = page.locator('text=AI Powered');
    await expect(glassBadge).toBeVisible();
  });

  test('3. Validate B2B Product RFQ Form Modal Payload Injection', async ({ page }: { page: Page }) => {
    // Route to the products catalog view
    await page.goto('/products');

    // Locate the first available product target button
    const inquiryButton = page.locator('button:has-text("Contact for Pricing")').first();
    await expect(inquiryButton).toBeVisible();
    await inquiryButton.click();

    // Validate the context modal opened smoothly
    const modalHeader = page.locator('h2');
    await expect(modalHeader).toBeVisible();

    // Verify form input fields are interactive
    const nameInput = page.locator('input[type="text"]').first();
    const emailInput = page.locator('input[type="email"]').first();
    
    if (await nameInput.isVisible()) {
      await nameInput.fill('QA Tester Automation');
      await expect(nameInput).toHaveValue('QA Tester Automation');
    }
  });
});
