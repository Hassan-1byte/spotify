# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.setup.ts >> authenticate
- Location: tests/auth.setup.ts:7:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByTestId('login-username')

```

# Page snapshot

```yaml
- generic [ref=e6]:
  - generic [ref=e8]:
    - heading "Logged in as" [level=2] [ref=e10]
    - img [ref=e12]
    - generic [ref=e14]: Hassan Sheikh
  - button "Account Overview" [ref=e15] [cursor=pointer]:
    - generic [ref=e17]: Account Overview
  - button "Web Player" [ref=e18] [cursor=pointer]:
    - img [ref=e20]
    - generic [ref=e23]: Web Player
  - paragraph [ref=e24]:
    - button "Log Out" [ref=e25] [cursor=pointer]:
      - generic [ref=e26]: Log Out
```

# Test source

```ts
  1  | import { Locator, Page, test } from "@playwright/test"
  2  | 
  3  | export class LoginPage {
  4  | 
  5  |     readonly page: Page
  6  |     readonly usernameInput: Locator
  7  |     readonly passwordInput: Locator
  8  |     readonly loginButton: Locator
  9  |     readonly LogInWithPassword: Locator
  10 |     readonly WebPlayerBtn: Locator
  11 | 
  12 |     constructor(page: Page) {
  13 |         this.page = page;
  14 |         this.usernameInput = page.getByTestId('login-username') // 1
  15 |         this.loginButton = page.getByTestId('login-button') // 2
  16 |         this.LogInWithPassword = page.getByRole('button', { name: "Log in with a password" }) //3
  17 |         this.passwordInput = page.getByTestId('login-password')// 4
  18 |         this.loginButton = page.getByTestId('login-button') // 5
  19 |         this.WebPlayerBtn = page.getByTestId('web-player-link') // 6
  20 | 
  21 |     }
  22 | 
  23 |     async Navigate() {
  24 |         await this.page.goto('https://accounts.spotify.com/en/login');
  25 |     }
  26 | 
  27 | 
  28 |     async login(email: string, password: string) {
> 29 |         await this.usernameInput.fill(email);
     |                                  ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  30 |         await this.loginButton.click()
  31 |         await this.LogInWithPassword.click()
  32 |         await this.passwordInput.fill(password)
  33 |         await this.loginButton.click()
  34 |         await this.WebPlayerBtn.click()
  35 | 
  36 |         // Safety check: wait for navigation to finish
  37 |         await this.page.waitForURL('https://open.spotify.com/**');
  38 | 
  39 |     }
  40 | 
  41 | 
  42 | 
  43 | 
  44 | 
  45 | 
  46 | 
  47 | 
  48 | 
  49 | 
  50 | 
  51 | }
```