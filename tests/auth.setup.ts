// tests/auth.setup.ts
import { test as setup } from '../fixtures/base.fixture';

const authFile = 'state.json';

// Ensure loginPage is inside the curly braces here!
setup('authenticate', async ({ loginPage, page }) => {
  await loginPage.Navigate();

  await loginPage.login(
    process.env.SPOTIFY_USER_EMAIL!, 
    process.env.SPOTIFY_USER_PASSWORD!
  );

  await page.context().storageState({ path: authFile });
});