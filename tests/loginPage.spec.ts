import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.use({ storageState: { cookies: [], origins: [] } })

let lp: LoginPage

test.beforeEach(async ({ page }) => {
    lp = new LoginPage(page)
    await lp.launchUrl(process.env.BASE_URL!)
})

test("login into Procare", async () => {
    await lp.verifyLoginPage()
    await lp.loginToApplication(process.env.USER_USERNAME!, process.env.USER_PASSWORD!)
    await expect(lp.dashboardIdentifier).toBeVisible()
})

test("login with incorrect Username", async () => {
    await lp.loginToApplication(process.env.INCORRECT_USERNAME!, process.env.USER_PASSWORD!)
    await lp.loginErrorMessage()
})

test("Login with Incorrect Password", async () => {
    await lp.loginToApplication(process.env.USER_USERNAME!, process.env.INCORRECT_PASSWORD!)
    await lp.loginErrorMessage()
})
