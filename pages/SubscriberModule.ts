// All properties and Methods are belog to subscriber module

import { expect, Locator, Page } from "@playwright/test"


export class  SubscriberModule {

//Properties( Variables or Locators)


page: Page
subscribersLink: Locator
subscriberSearch: Locator
newSearchBtn: Locator
selectSubscriber: Locator
subscriberTable : Locator
planRenewalBtn: Locator
planSelection: Locator
proceedRenewal: Locator
planTable: Locator
planRows: Locator
currentPlanRow: Locator
futurePlanRows: Locator
cancelRenewalButton: Locator
enabledCancelRenewalButton: Locator


constructor( page: Page){

    this.page = page
this.subscribersLink = this.page.getByText("Subscribers", {exact: true})
this.subscriberSearch = this.page.getByPlaceholder("UserID or #Number or @Address or &ReferenceCode")
this.selectSubscriber = this.page.locator("div.hover-container ")
this.newSearchBtn = this.page.getByText("New Search", {exact: true})
this.subscriberTable = this.page.locator("table.subscribers-table")
this.planRenewalBtn = this.page.getByRole("button",{name: ' Plan Renewal '})
this.planSelection = this.page.locator("#plan")
this.proceedRenewal = this.page.getByRole("button",{name: ' Proceed '})
// Plan table locators
this.planTable =this.page.getByRole("table");
this.planRows =this.planTable.getByRole("row");
this.currentPlanRow =this.planRows.filter({has: this.page.getByText("Now", { exact: true }) });
this.futurePlanRows =this.planRows.filter({has: this.page.getByText("Next", { exact: true })});
this.cancelRenewalButton = this.page.getByRole("button", { name: "Cancel Renewal" });
this.enabledCancelRenewalButton =this.page.locator("button.btn.red:not([disabled])");

}


async launchUrl(url: string){
    await this.page.goto(url)

}
async launchSubscriberPage(){
    await this.subscribersLink.click()

}


async subscriberTableVerification (){

    await expect(this.subscriberSearch).toBeVisible()
    //await expect(this.newSearchBtn).toBeVisible()
    await expect(this.selectSubscriber).toBeVisible()
}

async searchUser(username:string){
    await this.subscriberSearch.fill(String(username))
    await this.selectSubscriber.click()
}

async userRenewal(planName: string){
    await this.planRenewalBtn.click()
    await expect(this.planSelection).toBeVisible()
    await this.planSelection.selectOption({label: planName})
    await this.proceedRenewal.click()


}


// async userRenewal(planName: string) {
//     await this.planRenewalBtn.click();
//     await expect(this.planSelection).toBeVisible();

//     console.log("Plan from Excel:", JSON.stringify(planName));

//     const options = await this.planSelection.locator("option").allTextContents();
//     console.log("Available options:", options);

//     await this.planSelection.selectOption({ label: planName });

//     await this.proceedRenewal.click();
// }



async cancelFuturePlan() {

    // Verify plan table is displayed
    await expect(this.planTable).toBeVisible();

    // Count future plans before cancellation
    const futurePlanCount = await this.futurePlanRows.count();

    console.log(`Future Plans Before Cancellation : ${futurePlanCount}`);

    // No future plans available
    if (futurePlanCount === 0) {
        console.log("No Future Plan Found");
        return;
    }

    // Verify tooltip for disabled Cancel Renewal buttons
    const totalButtons = await this.cancelRenewalButton.count();

    for (let i = 0; i < totalButtons; i++) {

        const button = this.cancelRenewalButton.nth(i);

        if (await button.isDisabled()) {

            await expect(button).toHaveAttribute(
                "title",
                "Cancel later future plans in order to activate this button."
            );

        }
    }

    // Verify enabled Cancel Renewal button
    await expect(this.enabledCancelRenewalButton).toBeEnabled();

    // Click enabled Cancel Renewal button
    await this.enabledCancelRenewalButton.click();

    // Verify one future plan is removed
    await expect(this.futurePlanRows).toHaveCount(futurePlanCount - 1);

    console.log("Future Plan Cancelled Successfully");

}



}
