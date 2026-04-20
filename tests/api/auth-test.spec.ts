// tests/api/auth-test.spec.ts
import { test } from '../../fixtures/base.fixture'; // Import our custom test

test('Verify I can retrieve Spotify Access Token', async ({ spotifyToken }) => {
    console.log('--- SUCCESS ---');
    console.log('Your Token is:', spotifyToken);
    
    // An interview-ready assertion
    await test.step('Validate token is not empty', async () => {
        if (!spotifyToken) throw new Error('Token generation failed!');
    });
});