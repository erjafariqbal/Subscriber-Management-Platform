import {test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

let lp : LoginPage

test.beforeEach(async({page})=>{
     lp = new LoginPage(page)
  await lp.launchUrl(process.env.BASE_URL!)


})

test("login into Procare", async()=>{

  
    await lp.verifyLoginPage() // Verify all the logo and field on login page
    await lp.loginToApplication(process.env.USER_USERNAME !, process.env.USER_PASSWORD !)
    await  expect(lp.dashbordIdentifier).toBeVisible()

  
})


test("login with incorrect Usenname", async()=>{
    
     await lp.loginToApplication(process.env.INCORRECT_USERNAME!, process.env.USER_PASSWORD!)
    // await lp.loginErrorMessage()



})


test("Login with Incorrect Password", async({page})=>{
  
 await lp.loginToApplication(process.env.USER_USERNAME!, process.env.INCORRECT_PASSWORD!)

})
