# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/auth-test.spec.ts >> Verify I can retrieve Spotify Access Token
- Location: tests/api/auth-test.spec.ts:4:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import { APIRequestContext, expect } from '@playwright/test';
  2  | 
  3  | export class AuthController {
  4  |     // We pass the 'request' fixture from the test into this class
  5  |     constructor(private request: APIRequestContext) {}
  6  | 
  7  |     async getAccessToken() {
  8  |         // This is the same logic you've memorized, just using process.env
  9  |         const response = await this.request.post('https://accounts.spotify.com/api/token', {
  10 |             headers: {
  11 |                 'Content-Type': 'application/x-www-form-urlencoded',
  12 |                 // Basic Auth using your ID and Secret
  13 |                 'Authorization': 'Basic ' + Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64'),
  14 |             },
  15 |             form: {
  16 |                 grant_type: 'client_credentials',
  17 |             },
  18 |         });
  19 | 
> 20 |         expect(response.ok()).toBeTruthy();
     |                               ^ Error: expect(received).toBeTruthy()
  21 |         const body = await response.json();
  22 |         return body.access_token; // This returns the string you need
  23 |     }
  24 | }
```