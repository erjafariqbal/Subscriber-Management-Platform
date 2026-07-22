import { expect, Locator, Page } from "@playwright/test";

export class DashBoard{

page : Page
excitellogo : Locator
partnerName : Locator
taxationDetail: Locator
gstNumber: Locator
panNumber: Locator
accountContact: Locator
purchaseLimit: Locator
creditLimit: Locator
availableCredit: Locator
balance: Locator
profileName: Locator
myProfile: Locator
logout: Locator
profile: Locator
name: Locator



constructor(page: Page){

    this.page = page
    this.excitellogo = this.page.getByAltText("logo", {exact: true})
    this.partnerName = this.page.locator("div.partner-name")
    this.taxationDetail = this.page.getByText("Taxation Details",{exact:true})
    this.gstNumber =this.page.getByText("GST Number : ")
    this.panNumber= this.page.getByText("PAN No : ")
    this.accountContact =this.page.getByText("* contact Excitel for changes at")
    this.purchaseLimit= this.page.getByText("TPL: ")
    this.creditLimit = this.page.getByText("Credit Limit: ")
    this.availableCredit = this.page.getByText("Available Credit: ")
    this.balance = this.page.getByText("Balance: ")
    this.profileName= this.page.locator("[class='profile-name']")
    this.myProfile = this.page.getByText(" My Profile", {exact: true})
    this.logout = this.page.getByText("Logout", {exact: true})
    this.profile = this.page.locator("[class='profile-label']")
    this.name = this.page.getByText("Name", {exact:true})
    

    


}


   async launchUrl(url:string){

    await this.page.goto(url)
}

  async taxationHeader(){
       
    await this.taxationDetail.click()
    await  expect(this.gstNumber).toBeVisible()
    await  expect(this.panNumber).toBeVisible()
    await  expect(this.accountContact).toBeVisible()

  }

 async dashboardPurchaseLimit(){

   await this.purchaseLimit.click()
   await expect(this.creditLimit).toBeVisible()
   await expect(this.availableCredit).toBeVisible()
   await expect(this.balance).toBeVisible()
 }

 async userProfileAction(){
   
  await this.profileName.click()
  await expect(this.myProfile).toBeVisible()
  await expect(this.logout).toBeVisible()
  await this.logout.click()

 }
 async myProfileVerification (){

    await this.profileName.click()
    await this.myProfile.click()
    await expect(this.profile).toBeVisible()
    await expect(this.name).toBeVisible()


 }


}