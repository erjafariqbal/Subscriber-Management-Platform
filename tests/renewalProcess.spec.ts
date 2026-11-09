import { test } from "@playwright/test";
import path from 'path'
import { ExcelUtils } from "../utils/ExcelUtils";
import { SubscriberModule } from "../pages/SubscriberModule";

const filePath = path.join(__dirname, "../testdata/userName.xlsx")
const sheetName = "userdata"

const userIds = ExcelUtils.getExcelData(filePath, sheetName)

let sp: SubscriberModule

test.beforeEach(async ({ page }) => {
    sp = new SubscriberModule(page)
    await sp.launchUrl(process.env.BASE_URL!)
})

for (const user of userIds) {

    test(`renewal of username ${user.UserID}`, async () => {
        await sp.launchSubscriberPage()
        await sp.searchUser(user.UserID)
        await sp.userRenewal(user.planName)
    })

}
