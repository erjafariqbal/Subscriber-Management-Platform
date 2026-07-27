import {test, expect  } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashBoard } from "../pages/Dashboard";
import { SubscriberModule } from "../pages/SubscriberModule";

let lp :LoginPage
let dp : DashBoard
let sp: SubscriberModule
let username ="testj95"
//let planName ="Realtime 75 3M 2283"

test.beforeEach(async({page})=>{
   lp = new LoginPage(page)
   dp = new DashBoard(page)
   sp = new SubscriberModule(page)

   await lp.launchUrl(process.env.BASE_URL!)
   await lp.loginToApplication(process.env.USER_USERNAME!, process.env.USER_PASSWORD!)


})

test("Navigate to Subscriber Moddule", async({})=>{
   await sp.launchSubscriberPage()
   await sp.searchUser(username)
   await sp.userRenewal
()

})
