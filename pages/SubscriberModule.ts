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
    await this.subscriberSearch.fill(username)
    await this.selectSubscriber.click()
}

async userRenewal(){
    await this.planRenewalBtn.click()
    await expect(this.planSelection).toBeVisible()
    await this.planSelection.selectOption("3")
    await this.proceedRenewal.click()


}















}
