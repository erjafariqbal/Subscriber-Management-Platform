# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: subscriberPage.spec.ts >> renewal
- Location: tests/subscriberPage.spec.ts:23:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.selectOption: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#plan')
    - locator resolved to <select id="plan" name="plan" _ngcontent-cqs-c28="" class="form-control select ng-untouched ng-pristine ng-valid">…</select>
  - attempting select option action
    2 × waiting for element to be visible and enabled
      - option being selected is not enabled
    - retrying select option action
    - waiting 20ms
    2 × waiting for element to be visible and enabled
      - option being selected is not enabled
    - retrying select option action
      - waiting 100ms
    24 × waiting for element to be visible and enabled
       - option being selected is not enabled
     - retrying select option action
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
    - generic [ref=e7]: Test ERP Jafar
    - generic [ref=e8]:
      - generic [ref=e10] [cursor=pointer]:
        - text: Taxation Details
        - generic [ref=e11]: 
      - generic [ref=e13] [cursor=pointer]:
        - generic [ref=e14]:
          - text: "TPL:"
          - generic [ref=e15]:
            - text: "109434.18"
            - generic [ref=e16]: 
        - generic [ref=e17]: 
      - generic [ref=e19]:
        - generic [ref=e22] [cursor=pointer]: 
        - generic: 
      - strong [ref=e24]:
        - link "Portal" [ref=e25] [cursor=pointer]:
          - /url: https://staging-portal.excitel.in/choose-app
      - button "Color Legend" [ref=e29] [cursor=pointer]
      - generic [ref=e31] [cursor=pointer]:
        - generic [ref=e32]: 
        - text: Test ERP Jafar
        - generic [ref=e33]: 
  - navigation [ref=e35]:
    - link "Dashboard" [ref=e37] [cursor=pointer]:
      - /url: /
      - generic [ref=e38]: 
      - text: Dashboard
    - text:  
    - link "Employees " [ref=e40] [cursor=pointer]:
      - /url: /employee
      - generic [ref=e41]: 
      - text: Employees
      - generic [ref=e42]: 
    - text:  
    - link "Installations" [ref=e44] [cursor=pointer]:
      - /url: /installations
      - generic [ref=e45]: 
      - text: Installations
    - generic [ref=e46]:
      - link "Subscribers " [ref=e47] [cursor=pointer]:
        - /url: /subscriber
        - generic [ref=e48]: 
        - text: Subscribers
        - generic [ref=e49]: 
      - link "New Search" [ref=e50] [cursor=pointer]:
        - /url: /subscriber/advancedSearch
    - text:      
    - link "Reports " [ref=e52] [cursor=pointer]:
      - /url: /reports
      - generic [ref=e53]: 
      - text: Reports
      - generic [ref=e54]: 
    - text: 
    - link "Balance" [ref=e56] [cursor=pointer]:
      - /url: /balance
      - generic [ref=e57]: 
      - text: Balance
    - text: 
    - generic [ref=e59] [cursor=pointer]:
      - generic [ref=e60]: 
      - text: RFS Area
    - link "Partner Network Map" [ref=e62] [cursor=pointer]:
      - /url: /partnerNetworkMapping
      - generic [ref=e63]: 
      - text: Partner Network Map
    - link "Fiber to the home " [ref=e65] [cursor=pointer]:
      - /url: /ftth
      - generic [ref=e66]: 
      - text: Fiber to the home
      - generic [ref=e67]: 
    - link "ScorecardNew " [ref=e69] [cursor=pointer]:
      - /url: /scorecardNew
      - generic [ref=e70]: 
      - text: ScorecardNew
      - generic [ref=e71]: 
  - main [ref=e72]:
    - generic [ref=e74]:
      - generic [ref=e75]:
        - text: 
        - generic "testj95" [ref=e78] [cursor=pointer]:
          - generic [ref=e79]: testj95
          - generic [ref=e80]: 
        - generic [ref=e81] [cursor=pointer]: 
      - generic [ref=e82]:
        - generic [ref=e83]:
          - generic [ref=e84]:
            - generic [ref=e85]:
              - button " Synchronize" [ref=e86] [cursor=pointer]:
                - generic [ref=e87]: 
                - text: Synchronize
              - button "Last RADIUS Message" [ref=e88] [cursor=pointer]
            - generic [ref=e89]:
              - generic [ref=e90]: testj95
              - generic [ref=e91]: Test Jafar
              - generic [ref=e92]: Old Network
              - generic [ref=e93]: Reeltime 75 3M 2283
              - generic [ref=e94]:
                - generic [ref=e95]:
                  - generic [ref=e96]: "Service: Active"
                  - generic [ref=e97]: "Days left: 1184"
                - generic [ref=e98]:
                  - generic [ref=e99]: "Connection: Inactive"
                  - generic [ref=e100]: More than 1 month
            - generic [ref=e103]:
              - generic [ref=e104]: "Address:"
              - text: N/A okla office|Delhi
            - button " Status Check" [ref=e107] [cursor=pointer]:
              - generic [ref=e108]: 
              - text: Status Check
            - generic [ref=e109]:
              - generic [ref=e110]: Subscriber Details
              - generic [ref=e111]:
                - generic [ref=e112]: Primary Phone
                - generic [ref=e113]: "9999999999"
              - generic [ref=e116]: Last Called Phone Number
              - generic [ref=e118]:
                - generic [ref=e119]: Email
                - textbox [ref=e120]: test@excitel.com
                - button "" [disabled] [ref=e122]:
                  - generic [ref=e123]: 
              - generic [ref=e124]:
                - generic [ref=e125]: GST Number
                - textbox [disabled] [ref=e126]
                - button "Change Gst Number" [disabled] [ref=e128]
              - generic [ref=e129]:
                - generic [ref=e130]: MAC Address
                - textbox [disabled] [ref=e131]: N/A
                - button [ref=e133] [cursor=pointer]:
                  - generic [ref=e134]: 
              - generic [ref=e135]:
                - generic [ref=e136]: Additional Numbers
                - generic [ref=e139]:
                  - generic [ref=e140]: Phone Number
                  - generic [ref=e141]: "8588865243"
                  - generic [ref=e142]:
                    - text: 
                    - generic "Mark as last called phone number" [ref=e143]:
                      - generic [ref=e144] [cursor=pointer]: 
                    - generic "Remove phone number" [ref=e145]:
                      - generic [ref=e146] [cursor=pointer]: 
                - text: 
              - generic [ref=e147]:
                - generic [ref=e148]: Dates
                - generic [ref=e149]:
                  - generic [ref=e150]:
                    - generic [ref=e151]: Service Expiration Date
                    - generic [ref=e152]: 26-Oct-2026
                  - generic [ref=e153]:
                    - generic [ref=e154]: Service Last Renewal Date
                    - generic [ref=e155]: 29-Jul-2026
                  - generic [ref=e156]:
                    - generic [ref=e157]: Subscriber Creation Date
                    - generic [ref=e158]: 08-Nov-2023
                  - generic [ref=e159]:
                    - generic [ref=e160]: My Excitel Web Last Login Date
                    - generic [ref=e161]:
                      - generic [ref=e162]: 2025-06-05
                      - generic [ref=e163]: 13:29:01
                  - generic [ref=e164]:
                    - generic [ref=e165]: My Excitel App Last Login Date
                    - generic [ref=e166]:
                      - generic [ref=e167]: 2025-06-05
                      - generic [ref=e168]: 11:19:21
            - generic [ref=e169]:
              - generic [ref=e170]: Partner Data
              - generic [ref=e171]:
                - generic [ref=e172]: Partner Name
                - generic [ref=e173]: Test ERP Jafar
              - generic [ref=e174]:
                - generic [ref=e175]: Status
                - generic [ref=e176]: Active
              - generic [ref=e177]:
                - generic [ref=e178]: Allowed Infrastructures
                - generic [ref=e179]: Old Network, Excitel Fiber, Excitel Fiber Lite
              - generic [ref=e182]:
                - generic [ref=e183]: Reference Code
                - text: 
              - generic [ref=e187]:
                - generic [ref=e188]: Comment
                - textbox [ref=e189]
                - generic [ref=e190] [cursor=pointer]: 
              - generic [ref=e191]: Excitel Data
              - generic [ref=e194]:
                - generic [ref=e195]: CAF Date
                - generic [ref=e196]: 2023-11-02
                - text: 
              - generic [ref=e199]:
                - generic [ref=e200]: CAF No
                - generic [ref=e201]: "1"
                - text: 
              - generic [ref=e204]:
                - generic [ref=e205]: Sales Representative
                - generic [ref=e206]: Walk in
                - text: 
              - generic [ref=e207]:
                - generic [ref=e208]: Created By
                - generic [ref=e209]: Test ERP Jafar / Test ERP Jafar
              - generic [ref=e210]:
                - generic [ref=e211]: Campaign Pool
                - generic: 
              - generic [ref=e215]:
                - generic [ref=e216]: 1st Payment Method
                - generic [ref=e217]: Cash
                - text: 
          - link "Plan" [ref=e220] [cursor=pointer]:
            - /url: /subscriber/1271297/plan/1/1/1/1/1
          - generic [ref=e221]:
            - generic [ref=e223]:
              - generic [ref=e224]: Plans
              - generic [ref=e225]:
                - button "Plan Renewal" [active] [ref=e227] [cursor=pointer]
                - table [ref=e229]:
                  - rowgroup [ref=e230]:
                    - row "Plan Name Validity Activation Date Expiry Date Internet Mbps (at all times) Actions" [ref=e231]:
                      - columnheader [ref=e232]
                      - columnheader "Plan Name" [ref=e233]
                      - columnheader "Validity" [ref=e234]
                      - columnheader "Activation Date" [ref=e235]
                      - columnheader "Expiry Date" [ref=e236]
                      - columnheader "Internet Mbps (at all times)" [ref=e237]
                      - columnheader "Actions" [ref=e238]
                  - rowgroup [ref=e239]:
                    - row "Now Reeltime 75 3M 2283 3 Month 27-Jul-2026 26-Oct-2026 75 Not Applicable" [ref=e240]:
                      - cell "Now" [ref=e241]
                      - cell "Reeltime 75 3M 2283" [ref=e242]
                      - cell "3 Month" [ref=e243]
                      - cell "27-Jul-2026" [ref=e244]
                      - cell "26-Oct-2026" [ref=e245]
                      - cell "75" [ref=e246]
                      - cell "Not Applicable" [ref=e247]:
                        - generic [ref=e248]: Not Applicable
                    - row "Next REELTIME 995 1 Month 27-Oct-2029 26-Nov-2029 100 Cancel Renewal" [ref=e249]:
                      - cell "Next" [ref=e250]
                      - cell "REELTIME 995" [ref=e251]
                      - cell "1 Month" [ref=e252]
                      - cell "27-Oct-2029" [ref=e253]
                      - cell "26-Nov-2029" [ref=e254]
                      - cell "100" [ref=e255]
                      - cell "Cancel Renewal" [ref=e256]:
                        - button "Cancel Renewal" [disabled] [ref=e258]
                    - row "Next REELTIME 995 1 Month 27-Nov-2029 26-Dec-2029 100 Cancel Renewal" [ref=e259]:
                      - cell "Next" [ref=e260]
                      - cell "REELTIME 995" [ref=e261]
                      - cell "1 Month" [ref=e262]
                      - cell "27-Nov-2029" [ref=e263]
                      - cell "26-Dec-2029" [ref=e264]
                      - cell "100" [ref=e265]
                      - cell "Cancel Renewal" [ref=e266]:
                        - button "Cancel Renewal" [disabled] [ref=e268]
                    - row "Next REELTIME 995 1 Month 27-Dec-2029 26-Jan-2030 100 Cancel Renewal" [ref=e269]:
                      - cell "Next" [ref=e270]
                      - cell "REELTIME 995" [ref=e271]
                      - cell "1 Month" [ref=e272]
                      - cell "27-Dec-2029" [ref=e273]
                      - cell "26-Jan-2030" [ref=e274]
                      - cell "100" [ref=e275]
                      - cell "Cancel Renewal" [ref=e276]:
                        - button "Cancel Renewal" [disabled] [ref=e278]
                    - row "Next REELTIME 995 1 Month 27-Jan-2030 26-Feb-2030 100 Cancel Renewal" [ref=e279]:
                      - cell "Next" [ref=e280]
                      - cell "REELTIME 995" [ref=e281]
                      - cell "1 Month" [ref=e282]
                      - cell "27-Jan-2030" [ref=e283]
                      - cell "26-Feb-2030" [ref=e284]
                      - cell "100" [ref=e285]
                      - cell "Cancel Renewal" [ref=e286]:
                        - button "Cancel Renewal" [disabled] [ref=e288]
                    - row "Next REELTIME 995 1 Month 27-Feb-2030 26-Mar-2030 100 Cancel Renewal" [ref=e289]:
                      - cell "Next" [ref=e290]
                      - cell "REELTIME 995" [ref=e291]
                      - cell "1 Month" [ref=e292]
                      - cell "27-Feb-2030" [ref=e293]
                      - cell "26-Mar-2030" [ref=e294]
                      - cell "100" [ref=e295]
                      - cell "Cancel Renewal" [ref=e296]:
                        - button "Cancel Renewal" [disabled] [ref=e298]
                    - row "Next REELTIME 995 1 Month 27-Mar-2030 26-Apr-2030 100 Cancel Renewal" [ref=e299]:
                      - cell "Next" [ref=e300]
                      - cell "REELTIME 995" [ref=e301]
                      - cell "1 Month" [ref=e302]
                      - cell "27-Mar-2030" [ref=e303]
                      - cell "26-Apr-2030" [ref=e304]
                      - cell "100" [ref=e305]
                      - cell "Cancel Renewal" [ref=e306]:
                        - button "Cancel Renewal" [disabled] [ref=e308]
                    - row "Next REELTIME 995 1 Month 27-Apr-2030 26-May-2030 100 Cancel Renewal" [ref=e309]:
                      - cell "Next" [ref=e310]
                      - cell "REELTIME 995" [ref=e311]
                      - cell "1 Month" [ref=e312]
                      - cell "27-Apr-2030" [ref=e313]
                      - cell "26-May-2030" [ref=e314]
                      - cell "100" [ref=e315]
                      - cell "Cancel Renewal" [ref=e316]:
                        - button "Cancel Renewal" [disabled] [ref=e318]
                    - row "Next REELTIME 995 1 Month 27-May-2030 26-Jun-2030 100 Cancel Renewal" [ref=e319]:
                      - cell "Next" [ref=e320]
                      - cell "REELTIME 995" [ref=e321]
                      - cell "1 Month" [ref=e322]
                      - cell "27-May-2030" [ref=e323]
                      - cell "26-Jun-2030" [ref=e324]
                      - cell "100" [ref=e325]
                      - cell "Cancel Renewal" [ref=e326]:
                        - button "Cancel Renewal" [disabled] [ref=e328]
                    - row "Next REELTIME 995 1 Month 27-Jun-2030 26-Jul-2030 100 Cancel Renewal" [ref=e329]:
                      - cell "Next" [ref=e330]
                      - cell "REELTIME 995" [ref=e331]
                      - cell "1 Month" [ref=e332]
                      - cell "27-Jun-2030" [ref=e333]
                      - cell "26-Jul-2030" [ref=e334]
                      - cell "100" [ref=e335]
                      - cell "Cancel Renewal" [ref=e336]:
                        - button "Cancel Renewal" [disabled] [ref=e338]
                    - row "Next Reeltime 50 6M 3336 6 Month 27-Oct-2026 26-Apr-2027 50 Cancel Renewal" [ref=e339]:
                      - cell "Next" [ref=e340]
                      - cell "Reeltime 50 6M 3336" [ref=e341]
                      - cell "6 Month" [ref=e342]
                      - cell "27-Oct-2026" [ref=e343]
                      - cell "26-Apr-2027" [ref=e344]
                      - cell "50" [ref=e345]
                      - cell "Cancel Renewal" [ref=e346]:
                        - button "Cancel Renewal" [disabled] [ref=e348]
                    - row "Next Reeltime 50 6M 3336 6 Month 27-Apr-2027 26-Oct-2027 50 Cancel Renewal" [ref=e349]:
                      - cell "Next" [ref=e350]
                      - cell "Reeltime 50 6M 3336" [ref=e351]
                      - cell "6 Month" [ref=e352]
                      - cell "27-Apr-2027" [ref=e353]
                      - cell "26-Oct-2027" [ref=e354]
                      - cell "50" [ref=e355]
                      - cell "Cancel Renewal" [ref=e356]:
                        - button "Cancel Renewal" [disabled] [ref=e358]
                    - row "Next Reeltime 50 6M 3336 6 Month 27-Oct-2027 26-Apr-2028 50 Cancel Renewal" [ref=e359]:
                      - cell "Next" [ref=e360]
                      - cell "Reeltime 50 6M 3336" [ref=e361]
                      - cell "6 Month" [ref=e362]
                      - cell "27-Oct-2027" [ref=e363]
                      - cell "26-Apr-2028" [ref=e364]
                      - cell "50" [ref=e365]
                      - cell "Cancel Renewal" [ref=e366]:
                        - button "Cancel Renewal" [disabled] [ref=e368]
                    - row "Next Reeltime 50 6M 3336 6 Month 27-Apr-2028 26-Oct-2028 50 Cancel Renewal" [ref=e369]:
                      - cell "Next" [ref=e370]
                      - cell "Reeltime 50 6M 3336" [ref=e371]
                      - cell "6 Month" [ref=e372]
                      - cell "27-Apr-2028" [ref=e373]
                      - cell "26-Oct-2028" [ref=e374]
                      - cell "50" [ref=e375]
                      - cell "Cancel Renewal" [ref=e376]:
                        - button "Cancel Renewal" [disabled] [ref=e378]
                    - row "Next Reeltime 50 6M 3336 6 Month 27-Oct-2028 26-Apr-2029 50 Cancel Renewal" [ref=e379]:
                      - cell "Next" [ref=e380]
                      - cell "Reeltime 50 6M 3336" [ref=e381]
                      - cell "6 Month" [ref=e382]
                      - cell "27-Oct-2028" [ref=e383]
                      - cell "26-Apr-2029" [ref=e384]
                      - cell "50" [ref=e385]
                      - cell "Cancel Renewal" [ref=e386]:
                        - button "Cancel Renewal" [disabled] [ref=e388]
                    - row "Next Reeltime 50 6M 3336 6 Month 27-Apr-2029 26-Oct-2029 50 Cancel Renewal" [ref=e389]:
                      - cell "Next" [ref=e390]
                      - cell "Reeltime 50 6M 3336" [ref=e391]
                      - cell "6 Month" [ref=e392]
                      - cell "27-Apr-2029" [ref=e393]
                      - cell "26-Oct-2029" [ref=e394]
                      - cell "50" [ref=e395]
                      - cell "Cancel Renewal" [ref=e396]:
                        - button "Cancel Renewal" [ref=e398] [cursor=pointer]
            - generic [ref=e400]:
              - generic [ref=e401] [cursor=pointer]: 
              - heading "Plan Renewal" [level=1] [ref=e402]
              - generic [ref=e406]:
                - generic [ref=e407]:
                  - generic [ref=e408]: Plan (use current Plan or select new one)
                  - combobox "Plan (use current Plan or select new one)" [ref=e409]:
                    - option "Select Plan" [disabled]
                    - option "REELTIME 995"
                    - option "REELTIME 652"
                    - option "REELTIME 845"
                    - option "Reeltime 50 6M 3336"
                    - option "Reeltime 75 6M 4056"
                    - option "Reeltime 75 3M 2283" [selected]
                    - option "Reeltime 100 3M 2688"
                    - option "Reeltime 100 6M 4776"
                    - option "Reeltime 50 12M 5844"
                    - option "Reeltime 75 12M 7104"
                    - option "Reeltime 100 12M 8364"
                    - option "Reeltime Binge 50 6M 2940"
                    - option "Reeltime Festive Bonanza"
                    - option "Reeltime 50 Diwali 2019 3 + 1"
                - generic [ref=e410]:
                  - generic [ref=e411]: Payment Summary
                  - table [ref=e412]:
                    - 'row "Service Name: Reeltime 75 3M 2283" [ref=e413]':
                      - cell "Service Name:" [ref=e414]
                      - cell "Reeltime 75 3M 2283" [ref=e415]:
                        - generic [ref=e416]: Reeltime 75 3M 2283
                    - 'row "Internet Mbps (at all times): 75" [ref=e417]':
                      - cell "Internet Mbps (at all times):" [ref=e418]:
                        - generic [ref=e419]:
                          - text: Internet Mbps
                          - generic [ref=e420]: "(at all times):"
                      - cell "75" [ref=e421]:
                        - generic [ref=e422]: "75"
                    - 'row "Service Validity: 3 Month" [ref=e423]':
                      - cell "Service Validity:" [ref=e424]
                      - cell "3 Month" [ref=e425]:
                        - generic [ref=e426]: 3 Month
                    - 'row "Service Activation Date: 27-Oct-2026" [ref=e427]':
                      - cell "Service Activation Date:" [ref=e428]
                      - cell "27-Oct-2026" [ref=e429]:
                        - generic [ref=e430]: 27-Oct-2026
                    - 'row "Service Expiration Date: 26-Jan-2027" [ref=e431]':
                      - cell "Service Expiration Date:" [ref=e432]
                      - cell "26-Jan-2027" [ref=e433]:
                        - generic [ref=e434]: 26-Jan-2027
                    - 'row "Plan Amount: 2693.94 " [ref=e435]':
                      - cell "Plan Amount:" [ref=e436]
                      - cell "2693.94 " [ref=e437]:
                        - generic [ref=e438]:
                          - text: "2693.94"
                          - generic [ref=e439]: 
                    - 'row "Extra Charges: 0.00 " [ref=e440]':
                      - cell "Extra Charges:" [ref=e441]
                      - cell "0.00 " [ref=e442]:
                        - generic [ref=e443]:
                          - text: "0.00"
                          - generic [ref=e444]: 
                    - 'row "Total Amount: 2693.94 " [ref=e445]':
                      - cell "Total Amount:" [ref=e446]
                      - cell "2693.94 " [ref=e447]:
                        - generic [ref=e448]:
                          - text: "2693.94"
                          - generic [ref=e449]: 
              - generic [ref=e451]:
                - button "Cancel" [ref=e452] [cursor=pointer]
                - button "Proceed" [ref=e453] [cursor=pointer]
            - generic: 
            - generic: 
            - generic: 
        - generic: 
        - generic: 
        - generic:   
        - generic: 
        - generic: 
```

# Test source

```ts
  1   | // All properties and Methods are belog to subscriber module
  2   | 
  3   | import { expect, Locator, Page } from "@playwright/test"
  4   | 
  5   | 
  6   | export class  SubscriberModule {
  7   | 
  8   | //Properties( Variables or Locators)
  9   | 
  10  | 
  11  | page: Page
  12  | subscribersLink: Locator
  13  | subscriberSearch: Locator
  14  | newSearchBtn: Locator
  15  | selectSubscriber: Locator
  16  | subscriberTable : Locator
  17  | planRenewalBtn: Locator
  18  | planSelection: Locator
  19  | proceedRenewal: Locator
  20  | planTable: Locator
  21  | planRows: Locator
  22  | currentPlanRow: Locator
  23  | futurePlanRows: Locator
  24  | cancelRenewalButton: Locator
  25  | enabledCancelRenewalButton: Locator
  26  | 
  27  | 
  28  | constructor( page: Page){
  29  | 
  30  |     this.page = page
  31  | this.subscribersLink = this.page.getByText("Subscribers", {exact: true})
  32  | this.subscriberSearch = this.page.getByPlaceholder("UserID or #Number or @Address or &ReferenceCode")
  33  | this.selectSubscriber = this.page.locator("div.hover-container ")
  34  | this.newSearchBtn = this.page.getByText("New Search", {exact: true})
  35  | this.subscriberTable = this.page.locator("table.subscribers-table")
  36  | this.planRenewalBtn = this.page.getByRole("button",{name: ' Plan Renewal '})
  37  | this.planSelection = this.page.locator("#plan")
  38  | this.proceedRenewal = this.page.getByRole("button",{name: ' Proceed '})
  39  | // Plan table locators
  40  | this.planTable =this.page.getByRole("table");
  41  | this.planRows =this.planTable.getByRole("row");
  42  | this.currentPlanRow =this.planRows.filter({has: this.page.getByText("Now", { exact: true }) });
  43  | this.futurePlanRows =this.planRows.filter({has: this.page.getByText("Next", { exact: true })});
  44  | this.cancelRenewalButton = this.page.getByRole("button", { name: "Cancel Renewal" });
  45  | this.enabledCancelRenewalButton =this.page.locator("button.btn.red:not([disabled])");
  46  | 
  47  | }
  48  | 
  49  | 
  50  | async launchUrl(url: string){
  51  |     await this.page.goto(url)
  52  | 
  53  | }
  54  | async launchSubscriberPage(){
  55  |     await this.subscribersLink.click()
  56  | 
  57  | }
  58  | 
  59  | 
  60  | async subscriberTableVerification (){
  61  | 
  62  |     await expect(this.subscriberSearch).toBeVisible()
  63  |     //await expect(this.newSearchBtn).toBeVisible()
  64  |     await expect(this.selectSubscriber).toBeVisible()
  65  | }
  66  | 
  67  | async searchUser(username:string){
  68  |     await this.subscriberSearch.fill(String(username))
  69  |     await this.selectSubscriber.click()
  70  | }
  71  | 
  72  | async userRenewal(planName: string){
  73  |     await this.planRenewalBtn.click()
  74  |     await expect(this.planSelection).toBeVisible()
> 75  |     await this.planSelection.selectOption({label: planName})
      |                              ^ Error: locator.selectOption: Test timeout of 30000ms exceeded.
  76  |     await this.proceedRenewal.click()
  77  | 
  78  | 
  79  | }
  80  | 
  81  | 
  82  | // async userRenewal(planName: string) {
  83  | //     await this.planRenewalBtn.click();
  84  | //     await expect(this.planSelection).toBeVisible();
  85  | 
  86  | //     console.log("Plan from Excel:", JSON.stringify(planName));
  87  | 
  88  | //     const options = await this.planSelection.locator("option").allTextContents();
  89  | //     console.log("Available options:", options);
  90  | 
  91  | //     await this.planSelection.selectOption({ label: planName });
  92  | 
  93  | //     await this.proceedRenewal.click();
  94  | // }
  95  | 
  96  | 
  97  | 
  98  | async cancelFuturePlan() {
  99  | 
  100 |     // Verify plan table is displayed
  101 |     await expect(this.planTable).toBeVisible();
  102 | 
  103 |     // Count future plans before cancellation
  104 |     const futurePlanCount = await this.futurePlanRows.count();
  105 | 
  106 |     console.log(`Future Plans Before Cancellation : ${futurePlanCount}`);
  107 | 
  108 |     // No future plans available
  109 |     if (futurePlanCount === 0) {
  110 |         console.log("No Future Plan Found");
  111 |         return;
  112 |     }
  113 | 
  114 |     // Verify tooltip for disabled Cancel Renewal buttons
  115 |     const totalButtons = await this.cancelRenewalButton.count();
  116 | 
  117 |     for (let i = 0; i < totalButtons; i++) {
  118 | 
  119 |         const button = this.cancelRenewalButton.nth(i);
  120 | 
  121 |         if (await button.isDisabled()) {
  122 | 
  123 |             await expect(button).toHaveAttribute(
  124 |                 "title",
  125 |                 "Cancel later future plans in order to activate this button."
  126 |             );
  127 | 
  128 |         }
  129 |     }
  130 | 
  131 |     // Verify enabled Cancel Renewal button
  132 |     await expect(this.enabledCancelRenewalButton).toBeEnabled();
  133 | 
  134 |     // Click enabled Cancel Renewal button
  135 |     await this.enabledCancelRenewalButton.click();
  136 | 
  137 |     // Verify one future plan is removed
  138 |     await expect(this.futurePlanRows).toHaveCount(futurePlanCount - 1);
  139 | 
  140 |     console.log("Future Plan Cancelled Successfully");
  141 | 
  142 | }
  143 | 
  144 | 
  145 | 
  146 | }
  147 | 
```