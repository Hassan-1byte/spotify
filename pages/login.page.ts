import { Locator, Page, test } from "@playwright/test"

export class LoginPage {

    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator
    readonly LogInWithPassword: Locator
    readonly WebPlayerBtn: Locator

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByTestId('login-username') // 1
        this.loginButton = page.getByTestId('login-button') // 2
        this.LogInWithPassword = page.getByRole('button', { name: "Log in with a password" }) //3
        this.passwordInput = page.getByTestId('login-password')// 4
        this.loginButton = page.getByTestId('login-button') // 5
        this.WebPlayerBtn = page.getByTestId('web-player-link') // 6

    }

    async Navigate() {
        await this.page.goto('https://accounts.spotify.com/en/login');
    }


    async login(email: string, password: string) {
        await this.usernameInput.fill(email);
        await this.loginButton.click()
        await this.LogInWithPassword.click()
        await this.passwordInput.fill(password)
        await this.loginButton.click()
        await this.WebPlayerBtn.click()

        // Safety check: wait for navigation to finish
        await this.page.waitForURL('https://open.spotify.com/**');

    }











}