# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hybrid/edge-case.spec.ts >> Hybrid: Create Playlist via API and Verify in UI
- Location: tests/hybrid/edge-case.spec.ts:4:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 403
```

# Test source

```ts
  1  | import { test } from '../../fixtures/base.fixture';
  2  | import { expect } from '@playwright/test';
  3  | 
  4  | test('Hybrid: Create Playlist via API and Verify in UI', async ({ spotifyToken, userController, page }) => {
  5  | 
  6  |     let playlistId: string;
  7  | 
  8  |     await test.step('STEP 1: Verify API Data (Public Artist)', async () => {
  9  |         // We use a public artist ID to avoid the Premium 403 error
  10 |         const response = await userController.getArtistInfo(spotifyToken, '1dfeR4HaWDbWqFm9BYpYAX');
  11 | 
  12 |         console.log(`DEBUG: Status Code is ${response.status()}`);
  13 | 
  14 |         if (!response.ok()) {
  15 |             const errorBody = await response.text();
  16 |             console.log(`DEBUG: Error Message: ${errorBody}`);
  17 |         }
  18 | 
> 19 |         expect(response.status()).toBe(200);
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  20 |         const artist = await response.json();
  21 |         console.log(`Successfully fetched artist via API: ${artist.name}`);
  22 |     });
  23 | 
  24 |     
  25 |     await test.step('STEP 2: Interact with UI (Already Logged In)', async () => {
  26 |         await page.goto('/'); // This goes to the baseURL
  27 |         // Because of storageState, you won't see the login page!
  28 |         // You will be directly on the Spotify Player.
  29 | 
  30 |         // Let's verify the user's name is visible in the UI
  31 |         await expect(page.getByTestId('user-widget-link')).toBeVisible();
  32 |     });
  33 | 
  34 |     await test.step('STEP 3: Final API Verification', async () => {
  35 |         // Logic to verify the state hasn't changed or order is complete
  36 |         console.log('Hybrid Verification Complete.');
  37 |     });
  38 | });
```