# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test.spec.ts >> test
- Location: tests/test.spec.ts:3:5

# Error details

```
Error: locator.click: Unexpected token "" while parsing css selector "[class = 'outer-link with-toggler active.] >> internal:text=" Daily Status Analysis "s". Did you mean to CSS.escape it?
Call log:
  - waiting for [class = 'outer-link with-toggler active.] >> internal:text=" Daily Status Analysis "s

```

# Page snapshot

```yaml
- generic [ref=e6]:
  - generic "Procare Prerelease" [ref=e9]
  - generic [ref=e16]:
    - generic:
      - generic:
        - generic:
          - generic:
            - generic:
              - generic:
                - img
                - textbox "User name":
                  - /placeholder: username/email
                  - text: testerpjafar.admin
            - generic:
              - generic:
                - generic:
                  - img
                  - textbox "Password" [disabled]:
                    - /placeholder: your password
                    - text: 123456s@S
            - paragraph:
              - link "Forgot password":
                - /url: javascript:void(0)
  - button "Log In" [active]:
    - generic:
      - text: Log In
      - generic:
        - img
```

# Test source

```ts
  1  | import {test, expect  } from "@playwright/test";
  2  | 
  3  | test( "test", async({page})=>{
  4  | 
  5  |     await page.goto('https://procare-del-prerelease.north.excitel.in/')
  6  |     await page.getByPlaceholder("username/email").fill("testerpjafar.admin")
  7  |     await page.getByPlaceholder("your password").fill("123456s@S")
  8  |     await page.getByRole('button', {name: 'Log In'}).click()
  9  | 
  10 |     const reports = page.locator("[class = 'outer-link with-toggler active.]")
> 11 |     await reports.getByText(" Daily Status Analysis ", {exact: true}).click()
     |                                                                       ^ Error: locator.click: Unexpected token "" while parsing css selector "[class = 'outer-link with-toggler active.] >> internal:text=" Daily Status Analysis "s". Did you mean to CSS.escape it?
  12 | 
  13 | 
  14 |     
  15 |      // await page.getByText("Subscribers", {exact: true}).click()
  16 |     // await page.getByPlaceholder("UserID or #Number or @Address or &ReferenceCode").fill("testj95")
  17 |     // await page.locator("div.hover-container").click()
  18 |     // await page.getByRole("button",{name: ' Plan Renewal '}).click()
  19 | 
  20 |     //  const selectPlan = page.locator("#plan")
  21 |     //  await selectPlan.selectOption("5")
  22 |     //  await page.getByRole("button",{name: " Proceed "} ).click()
  23 | 
  24 |     // await page.waitForLoadState("networkidle");
  25 |     // await expect(page.getByAltText("logo", {exact: true})).toBeVisible()
  26 |     // await expect(page.locator("div.partner-name")).toBeVisible()
  27 |     // await expect(page.getByText(" Renewals ", {exact:true})).toBeVisible()
  28 |     // await page.waitForTimeout(1000)
  29 |     // await page.getByText("Taxation Details",{exact:true}).click()
  30 |     // await expect(page.getByText("GST Number : ")).toBeVisible()    
  31 |     // await expect(page.getByText("PAN No : ")).toBeVisible() 
  32 |     // await expect(page.getByText("* contact Excitel for changes at")).toBeVisible()
  33 |     // await page.getByText("TPL:").click()
  34 |     await page.locator("[class='profile-name']").click()
  35 |     await page.getByText("Logout", {exact: true}).click()
  36 |     
  37 |      
  38 |      
  39 | 
  40 | 
  41 |    await page.waitForTimeout(3000)
  42 | })
  43 | 
  44 | test("Handling dropdown non select tag", async({page})=>{
  45 | 
  46 |     await page.goto("https://demoqa.com/automation-practice-form")
  47 | 
  48 |     const stateDropdown = page.locator("#react-select-3-input")
  49 |     await stateDropdown.click()
  50 | 
  51 |     const stateSelect = page.getByText("Haryana", {exact: true})
  52 | 
  53 |     await stateSelect.click()
  54 | 
  55 | 
  56 |     await page.waitForTimeout(2000)
  57 | 
  58 |    
  59 | 
  60 | })
  61 | 
  62 | // test("new Test Case", async ({page})=>{
  63 | 
  64 | //         await page.goto("https://demoqa.com/automation-practice-form")
  65 | //         const subjectdd = page.locator("##eact-select-2-placeholder")
  66 | //         await subjectdd.click()
  67 |         
  68 | //         const subjectSelect = page.getByAltText("English", {exact: true})
  69 | //         await subjectSelect.click()
  70 | 
  71 | //         await page.waitForTimeout(2000)
  72 |         
  73 | 
  74 | 
  75 | 
  76 | 
  77 | // })
  78 | 
  79 | // // test("Dropdown with Select Tag", async ({page})=>{
  80 | 
  81 | // // await page.goto("https://practice.expandtesting.com/dropdown")
  82 | // // await page.locator("#country").selectOption("AS")
  83 | 
  84 | // await page.waitForTimeout(2000)
  85 | // })
```