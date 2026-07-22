import {test, expect  } from "@playwright/test";
import { DashBoard } from "../pages/Dashboard";
import { LoginPage } from "../pages/LoginPage";

let lp : LoginPage
let dp :DashBoard

test.beforeEach(async({page})=>{
     lp = new LoginPage(page)
     dp = new DashBoard(page)
     
      await lp.launchUrl(process.env.BASE_URL!)

      await lp.loginToApplication(process.env.USER_USERNAME!, process.env.USER_PASSWORD!)
})

test("Taxation Details Verification",async ({})=>{
  await dp.taxationHeader()
    

})

test ("Portal Balance Verification", async({})=>{

    await dp.dashboardPurchaseLimit()
})

test("Verify User Profile detail and logout", async({})=>{
  await dp.userProfileAction()

})

 
test("Verify My Profile detail", async({})=>{
   
  await dp.myProfileVerification()

})
