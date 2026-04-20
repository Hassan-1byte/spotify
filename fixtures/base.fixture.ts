// fixtures/base.fixture.ts
import { test as base } from '@playwright/test';
import { AuthController } from '../src/api/auth.controller';
import { UserController } from '../src/api/user.controller'; // Import the new tool
import { LoginPage } from '../pages/login.page';

type MyFixtures = {
    spotifyToken: string;
    userController: UserController; // Define the tool type
    loginPage: LoginPage
};

export const test = base.extend<MyFixtures>({
    spotifyToken: async ({ request }, use) => {
        const auth = new AuthController(request);
        const token = await auth.getAccessToken();
        await use(token); // This "hands over" the token to your test
    },

    userController: async ({ request }, use) => {
        const userCtrl = new UserController(request);
        await use(userCtrl);
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },



});