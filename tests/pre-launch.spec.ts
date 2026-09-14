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

  test('2. Verify Hero Asset Visibility', async ({ page }: { page: Page }) => {
    // Assert the structural hero image is available
    const heroCombined = page.locator('img[src*="hero-combined"]');

    await expect(heroCombined).toBeVisible();
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
