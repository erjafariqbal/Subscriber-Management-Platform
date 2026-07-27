# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: subscriberPage.spec.ts >> Navigate to Subscriber Moddule
- Location: tests/subscriberPage.spec.ts:23:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Subscribers', { exact: true })
    - waiting for" https://excitel-prerelease.eu.auth0.com/login/callback" navigation to finish...
    - navigated to "https://procare-del-prerelease.north.excitel.in/callback#access_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9USXlRa1ZGUWpVMk9FRXhNa1pDTXpRNVF6RkVPRU0xTVVKRE9URXpOa1k1TlRkRk56VTNOUSJ9.eyJodHRw…"
    - locator resolved to <span _ngcontent-vet-c1="">Subscribers</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    15 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - text: 
    - link "logo" [ref=e5] [cursor=pointer]:
      - /url: /
      - img "logo" [ref=e6]
    - generic [ref=e7]:
      - button "Color Legend" [ref=e11] [cursor=pointer]
      - generic [ref=e13] [cursor=pointer]:
        - generic [ref=e14]: 
        - generic [ref=e15]: 
  - navigation [ref=e17]:
    - link "Dashboard" [ref=e19] [cursor=pointer]:
      - /url: /
      - generic [ref=e20]: 
      - text: Dashboard
    - text:                        
  - main
```

# Test source

```ts
  1  | // All properties and Methods are belog to subscriber module
  2  | 
  3  | import { expect, Locator, Page } from "@playwright/test"
  4  | 
  5  | 
  6  | export class  SubscriberModule {
  7  | 
  8  | //Properties( Variables or Locators)
  9  | 
  10 | 
  11 | page: Page
  12 | subscribersLink: Locator
  13 | subscriberSearch: Locator
  14 | newSearchBtn: Locator
  15 | selectSubscriber: Locator
  16 | subscriberTable : Locator
  17 | planRenewalBtn: Locator
  18 | planSelection: Locator
  19 | proceedRenewal: Locator
  20 | 
  21 | 
  22 | constructor( page: Page){
  23 | 
  24 |     this.page = page
  25 | this.subscribersLink = this.page.getByText("Subscribers", {exact: true})
  26 | this.subscriberSearch = this.page.getByPlaceholder("UserID or #Number or @Address or &ReferenceCode")
  27 | this.selectSubscriber = this.page.locator("div.hover-container ")
  28 | this.newSearchBtn = this.page.getByText("New Search", {exact: true})
  29 | this.subscriberTable = this.page.locator("table.subscribers-table")
  30 | this.planRenewalBtn = this.page.getByRole("button",{name: ' Plan Renewal '})
  31 | this.planSelection = this.page.locator("#plan")
  32 | this.proceedRenewal = this.page.getByRole("button",{name: ' Proceed '})
  33 | 
  34 | 
  35 | }
  36 | async launchUrl(url: string){
  37 |     await this.page.goto(url)
  38 | 
  39 | }
  40 | async launchSubscriberPage(){
> 41 |     await this.subscribersLink.click()
     |                                ^ Error: locator.click: Test timeout of 30000ms exceeded.
  42 | 
  43 | }
  44 | 
  45 | 
  46 | async subscriberTableVerification (){
  47 | 
  48 |     await expect(this.subscriberSearch).toBeVisible()
  49 |     //await expect(this.newSearchBtn).toBeVisible()
  50 |     await expect(this.selectSubscriber).toBeVisible()
  51 | }
  52 | 
  53 | async searchUser(username:string){
  54 |     await this.subscriberSearch.fill(username)
  55 |     await this.selectSubscriber.click()
  56 | }
  57 | 
  58 | async userRenewal(planName:string){
  59 |     await this.planRenewalBtn.click()
  60 |     await expect(this.planSelection).toBeVisible()
  61 |     await this.planSelection.selectOption("3")
  62 |     await this.proceedRenewal.click()
  63 | 
  64 | 
  65 | }
  66 | 
  67 | 
  68 | 
  69 | 
  70 | 
  71 | 
  72 | 
  73 | 
  74 | 
  75 | 
  76 | 
  77 | 
  78 | 
  79 | 
  80 | 
  81 | }
  82 | 
```