import { expect, Locator, Page } from "@playwright/test";

export class ForgotPassword{

page: Page
forgotBtn : Locator
pageLogo: Locator
pageTittle: Locator
pageTextMessage: Locator
userEmail: Locator
sendEmailBtn: Locator
sendEmailNotification: Locator
employeeUsername: Locator



constructor(page: Page){

    this.page = page
    this.forgotBtn= this.page.getByText('Forgot password', {exact: true})
    this.pageLogo = this.page.locator("img.auth0-lock-header-logo")
    this.pageTittle = this.page.getByTitle('Reset your password', {exact: true})
    this.pageTextMessage = this.page.getByText("your email address. We")
    this.userEmail = this.page.getByPlaceholder("yours@example.com")
    this.sendEmailBtn = this.page.getByRole("button",{name: "Send email"})
    this.sendEmailNotification = this.page.getByText('sent you an email to')
    this.employeeUsername = this.page.getByPlaceholder("username/email")



}

async launchUrl(url:string){

    await this.page.goto(url)
}

async forgotPassword(userEmail: string){
    await this.forgotBtn.click()
    await this.userEmail.fill(userEmail)


}



async verifyFogotPage(){
    
    //await expect(this.forgotBtn).toBeVisible()
    await expect(this.pageLogo).toBeVisible()
    await expect(this.userEmail).toBeVisible()
    await expect(this.pageTittle).toBeVisible()
    await expect(this.pageTextMessage).toBeVisible()
    await expect(this.pageTextMessage).toBeVisible()
    await expect(this.sendEmailBtn).toBeVisible()
    //await expect(this.sendEmailNotification).toBeVisible()
    //await expect(this.employeeUsername).toBeVisible()
}



}