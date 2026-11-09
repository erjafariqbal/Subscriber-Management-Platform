import { test } from "@playwright/test";
import { DashBoard } from "../pages/Dashboard";

let dp: DashBoard

test.beforeEach(async ({ page }) => {
    dp = new DashBoard(page)
    await page.goto(process.env.BASE_URL!)
})

test("Taxation Details Verification", async () => {
    await dp.taxationHeader()
})

test("Portal Balance Verification", async () => {
    await dp.dashboardPurchaseLimit()
})

test("Verify User Profile detail and logout", async () => {
    await dp.userProfileAction()
})

test("Verify My Profile detail", async () => {
    await dp.myProfileVerification()
})
