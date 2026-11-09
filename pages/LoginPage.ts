// Login Page Object and methods

import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {

//Locator- Properties

page : Page
pageLogo: Locator
employeeUsername: Locator
employeePassword: Locator
forgotButton: Locator
loginButton: Locator
dashboardIdentifier: Locator
loginErrorText: Locator


constructor(page: Page){

    this.page = page
    this.pageLogo = this.page.locator("img.auth0-lock-header-logo")
    this.employeeUsername = this.page.getByPlaceholder("username/email")
    this.employeePassword = this.page.getByPlaceholder("your password")
    this.loginButton = this.page.getByRole('button', {name: 'Log In'})
    this.dashboardIdentifier= this.page.getByText(' Dashboard ', {exact: true})
    this.forgotButton = this.page.getByText('Forgot password', {exact: true})
    this.loginErrorText= this.page.getByText("Wrong username or password.", {exact: true})



    }

    async launchUrl(BASE_URL:string){

        await this.page.goto(BASE_URL)
    }
    async loginToApplication(username:string,password:string){

        await this.employeeUsername.fill(username)
        await this.employeePassword.fill(password)
        await this.loginButton.click()
        
    }

    async verifyLoginPage(){

        await expect(this.pageLogo).toBeVisible()
        await expect(this.employeeUsername).toBeVisible()
        await expect(this.employeePassword).toBeVisible()
        await expect(this.forgotButton).toBeVisible()
        await expect(this.loginButton).toBeVisible()



    }

    async loginErrorMessage(){

        await expect(this.loginErrorText).toBeVisible()

    }

    


}




