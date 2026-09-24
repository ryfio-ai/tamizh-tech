import { test, expect } from '@playwright/test';

test.describe('TamizhTech Website → ERP Public API Contract Integration', () => {

  test('1. Newsletter subscription sends CONTACT payload with newsletter intent', async ({ page }) => {
    let capturedPayload: any = null;

    // Intercept ERP submissions endpoint (including browser CORS preflight)
    await page.route('**/api/public/v1/submissions', async (route) => {
      const request = route.request();
      if (request.method() === 'OPTIONS') {
        return route.fulfill({
          status: 204,
          headers: {
            'access-control-allow-origin': '*',
            'access-control-allow-methods': 'POST, GET, OPTIONS',
            'access-control-allow-headers': '*',
          },
        });
      }
      capturedPayload = JSON.parse(request.postData() || '{}');
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        headers: {
          'access-control-allow-origin': '*',
          'access-control-allow-methods': 'POST, GET, OPTIONS',
          'access-control-allow-headers': '*',
        },
        body: JSON.stringify({
          success: true,
          submissionNo: 'CNT-2026-TEST01',
          message: 'Your request has been received successfully.',
        }),
      });
    });

    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
    page.on('requestfailed', req => console.log('REQ FAILED:', req.url(), req.failure()?.errorText));

    // NewsletterSubscribe is rendered on the Blog page
    await page.goto('/blog');

    const newsletterInput = page.locator('input[placeholder*="Enter your email for robotics updates"]').first();
    await expect(newsletterInput).toBeVisible();
    await newsletterInput.fill('newsletter.subscriber@example.com');

    const submitBtn = page.locator('button:has-text("Subscribe")').first();
    await submitBtn.click();

    // Verify success banner displays submission confirmation reference
    await expect(page.locator('text=Subscribed successfully!')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('text=CNT-2026-TEST01')).toBeVisible();

    // Assert exact ERP contract envelope & payload
    expect(capturedPayload).not.toBeNull();
    expect(capturedPayload.type).toBe('CONTACT');
    expect(capturedPayload.source).toBe('WEBSITE');
    expect(capturedPayload.idempotencyKey).toBeTruthy();
    expect(capturedPayload.payload.email).toBe('newsletter.subscriber@example.com');
    expect(capturedPayload.payload.subject).toBe('Newsletter Subscription');
    expect(capturedPayload.payload.message).toBe('Website newsletter subscription request');
  });

  test('2. Product Quote Modal sends RFQ payload with idempotency key', async ({ page }) => {
    test.setTimeout(90000);
    let capturedPayload: any = null;

    await page.route('**/api/public/v1/submissions', async (route) => {
      const request = route.request();
      if (request.method() === 'OPTIONS') {
        return route.fulfill({
          status: 204,
          headers: {
            'access-control-allow-origin': '*',
            'access-control-allow-methods': 'POST, GET, OPTIONS',
            'access-control-allow-headers': '*',
          },
        });
      }
      capturedPayload = JSON.parse(request.postData() || '{}');
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        headers: {
          'access-control-allow-origin': '*',
          'access-control-allow-methods': 'POST, GET, OPTIONS',
          'access-control-allow-headers': '*',
        },
        body: JSON.stringify({
          success: true,
          submissionNo: 'RFQ-2026-TEST02',
          message: 'Your quotation request has been received.',
        }),
      });
    });

    await page.goto('/contact');

    const quoteBtn = page.locator('button:has-text("Get a Quote")').first();
    await expect(quoteBtn).toBeVisible();
    await quoteBtn.click();

    // Fill the modal form
    const nameInput = page.locator('input[placeholder="e.g. Anand R"]').first();
    await expect(nameInput).toBeVisible();
    await nameInput.fill('Dr. K. Raman');
    await page.locator('input[placeholder="name@email.com"]').first().fill('raman@college.edu');
    await page.locator('input[placeholder="9876543210"]').first().fill('9876543210');

    const submitRequestBtn = page.locator('button:has-text("Submit Quote Request")').first();
    await submitRequestBtn.click();

    // Assert intercepted ERP request
    expect(capturedPayload).not.toBeNull();
    expect(capturedPayload.type).toBe('RFQ');
    expect(capturedPayload.source).toBe('WEBSITE');
    expect(capturedPayload.idempotencyKey).toBeTruthy();
    expect(capturedPayload.payload.name).toBe('Dr. K. Raman');
  });

  test('3. Robotics Club Join sends CLUB_REGISTRATION payload', async ({ page }) => {
    let capturedPayload: any = null;

    await page.route('**/api/public/v1/submissions', async (route) => {
      const request = route.request();
      if (request.method() === 'OPTIONS') {
        return route.fulfill({
          status: 204,
          headers: {
            'access-control-allow-origin': '*',
            'access-control-allow-methods': 'POST, GET, OPTIONS',
            'access-control-allow-headers': '*',
          },
        });
      }
      capturedPayload = JSON.parse(request.postData() || '{}');
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        headers: {
          'access-control-allow-origin': '*',
          'access-control-allow-methods': 'POST, GET, OPTIONS',
          'access-control-allow-headers': '*',
        },
        body: JSON.stringify({
          success: true,
          submissionNo: 'CLB-2026-TEST03',
          message: 'Membership application submitted successfully.',
        }),
      });
    });

    await page.goto('/robotics-club/join');

    await page.locator('input[name="name"]').fill('Praveen Kumar');
    await page.locator('input[name="mobile"]').fill('9123456780');
    await page.locator('input[name="email"]').fill('praveen@example.com');
    await page.locator('select[name="status"]').selectOption('college');
    await page.locator('input[name="collegeName"]').fill('PSG College of Technology');
    await page.locator('input[name="department"]').fill('Robotics and Automation');
    await page.locator('input[name="yearOfStudy"]').fill('3rd Year');
    await page.locator('input[name="collegeLocation"]').fill('Coimbatore');
    await page.locator('textarea[name="address"]').fill('123 Cross Cut Road, Gandhipuram, Coimbatore 641012');
    await page.locator('textarea[name="purpose"]').fill('Interested in tournament combat robotics and IoT.');

    const submitBtn = page.locator('button:has-text("Submit Application")');
    await submitBtn.click();

    // Wait for success confirmation
    await expect(page.locator('text=CLB-2026-TEST03')).toBeVisible({ timeout: 15000 });

    expect(capturedPayload).not.toBeNull();
    expect(capturedPayload.type).toBe('CLUB_REGISTRATION');
    expect(capturedPayload.source).toBe('WEBSITE');
    expect(capturedPayload.payload.name).toBe('Praveen Kumar');
    expect(capturedPayload.payload.institution).toBe('PSG College of Technology');
  });

});
