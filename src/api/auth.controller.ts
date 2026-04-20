import { APIRequestContext, expect } from '@playwright/test';

export class AuthController {
    // We pass the 'request' fixture from the test into this class
    constructor(private request: APIRequestContext) {}

    async getAccessToken() {
        // This is the same logic you've memorized, just using process.env
        const response = await this.request.post('https://accounts.spotify.com/api/token', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // Basic Auth using your ID and Secret
                'Authorization': 'Basic ' + Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64'),
            },
            form: {
                grant_type: 'client_credentials',
            },
        });

        expect(response.ok()).toBeTruthy();
        const body = await response.json();
        return body.access_token; // This returns the string you need
    }
}