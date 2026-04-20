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
Error: page.waitForURL: Target page, context or browser has been closed
=========================== logs ===========================
waiting for navigation to "https://open.spotify.com/**" until "load"
  navigated to "https://accounts.spotify.com/en/status?flow_ctx=1116f86e-98eb-45be-a6de-cf75971cad4e%3A1776734691&ubi=CAIQ1Zag49ozGiQ1MzM2MmMyMC01MTRiLTRkODUtYWJkMS0wNjI5NWE4Y2U3YmYiJGFjMjI2MzI1LTViZjYtNGI0YS04MjZkLTczZjRlZjU5ZGQxYzokYWMyMjYzMjUtNWJmNi00YjRhLTgyNmQtNzNmNGVmNTlkZDFjQhB1c2VyX2ludGVyYWN0aW9u"
  navigated to "https://accounts.spotify.com/en/status?flow_ctx=1116f86e-98eb-45be-a6de-cf75971cad4e%3A1776734691&ubi=CAIQ1Zag49ozGiQ1MzM2MmMyMC01MTRiLTRkODUtYWJkMS0wNjI5NWE4Y2U3YmYiJGFjMjI2MzI1LTViZjYtNGI0YS04MjZkLTczZjRlZjU5ZGQxYzokYWMyMjYzMjUtNWJmNi00YjRhLTgyNmQtNzNmNGVmNTlkZDFjQhB1c2VyX2ludGVyYWN0aW9u"
  navigated to "https://accounts.spotify.com/en/status?flow_ctx=1116f86e-98eb-45be-a6de-cf75971cad4e%3A1776734691&ubi=CAIQ1Zag49ozGiQ1MzM2MmMyMC01MTRiLTRkODUtYWJkMS0wNjI5NWE4Y2U3YmYiJGFjMjI2MzI1LTViZjYtNGI0YS04MjZkLTczZjRlZjU5ZGQxYzokYWMyMjYzMjUtNWJmNi00YjRhLTgyNmQtNzNmNGVmNTlkZDFjQhB1c2VyX2ludGVyYWN0aW9u"
============================================================
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
  10 | 
  11 |     constructor(page: Page) {
  12 |         this.page = page;
  13 |         this.usernameInput = page.getByTestId('login-username') // 1
  14 |         this.loginButton = page.getByTestId('login-button') // 2
  15 |         this.LogInWithPassword = page.getByRole('button', { name: "Log in with a password" }) //3
  16 |         this.passwordInput = page.getByTestId('login-password')// 4
  17 |         this.loginButton = page.getByTestId('login-button') // 5
  18 | 
  19 |     }
  20 | 
  21 |     async Navigate() {
  22 |         await this.page.goto('https://accounts.spotify.com/en/login');
  23 |     }
  24 | 
  25 | 
  26 |     async login(email: string, password: string) {
  27 |         await this.usernameInput.fill(email);
  28 |         await this.loginButton.click()
  29 |         await this.LogInWithPassword.click()
  30 |         await this.passwordInput.fill(password)
  31 |         await this.loginButton.click()
  32 | 
  33 |         // Safety check: wait for navigation to finish
> 34 |         await this.page.waitForURL('https://open.spotify.com/**');
     |                         ^ Error: page.waitForURL: Target page, context or browser has been closed
  35 | 
  36 |     }
  37 | 
  38 | 
  39 | 
  40 | 
  41 | 
  42 | 
  43 | 
  44 | 
  45 | 
  46 | 
  47 | 
  48 | }
```