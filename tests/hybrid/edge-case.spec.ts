import { test } from '../../fixtures/base.fixture';
import { expect } from '@playwright/test';

test('Hybrid: API Verification and UI Session Validation', async ({ userController, page }) => {

    await test.step('STEP 1: Verify API Infrastructure', async () => {
        const response = await userController.getSmokeTestData();
        expect(response.status()).toBe(200);
        const data = await response.json();
        console.log(`Successfully verified API Logic. Title: ${data.title}`);
    });

    await test.step('STEP 2: Verify UI Session', async () => {
        // Go directly to the web player
        await page.goto('https://open.spotify.com'); 
        
        // Let's take a manual screenshot here to see what the bot sees
        await page.screenshot({ path: 'debug-login.png' });

        // Wait for the main content to load first
        await page.waitForLoadState('networkidle');
        
        // Check for the profile element
        const userWidget = page.locator('button[data-testid="user-widget-link"], button[aria-label*="Profile"]');
        await expect(userWidget).toBeVisible({ timeout: 20000 });
        
        console.log('UI Verification: Session is active!');
    });
});