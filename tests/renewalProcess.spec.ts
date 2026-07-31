import {test, expect  } from "@playwright/test";
import path from 'path'
import { ExcelUtils } from "../utils/ExcelUtils";
import { LoginPage } from "../pages/LoginPage";
import { DashBoard } from "../pages/Dashboard";
import { SubscriberModule } from "../pages/SubscriberModule";

 const filePath = path.join(__dirname, "../testdata/userName.xlsx")
 const sheetName = "userdata"

  let userIds :any
  let lp :LoginPage
  let dp : DashBoard
  let sp: SubscriberModule 

  test.beforeEach(async({page})=>{
      lp = new LoginPage(page)
      dp = new DashBoard(page)    
      sp = new SubscriberModule(page)

       await lp.launchUrl(process.env.BASE_URL!)
     await lp.loginToApplication(process.env.USER_USERNAME!, process.env.USER_PASSWORD!)


  })

try{
 userIds = ExcelUtils.getExcelData(filePath, sheetName)


}
catch(e){
    console.error(e)
}

for (let user of userIds) {

test(`renewal of username ${user.UserID}`, async({})=>{

   await sp.launchSubscriberPage()
   await sp.searchUser(user.UserID)
   await sp.userRenewal(user.planName)

})


}