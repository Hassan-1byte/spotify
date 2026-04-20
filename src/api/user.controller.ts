import { APIRequestContext, expect } from '@playwright/test';

export class UserController {
    constructor(private request: APIRequestContext) { }

    // src/api/user.controller.ts
    async getSmokeTestData() {
        // This is a free API for testing purposes - no token or premium needed!
        const response = await this.request.get('https://jsonplaceholder.typicode.com/posts/1');
        return response;
    }

}