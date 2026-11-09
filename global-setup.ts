import { chromium } from "@playwright/test";

async function globalSetup() {

    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto(process.env.BASE_URL!)
    await page.getByPlaceholder("username/email").fill(process.env.USER_USERNAME!)
    await page.getByPlaceholder("your password").fill(process.env.USER_PASSWORD!)
    await page.getByRole("button", { name: "Log In" }).click()

    await page.waitForURL(process.env.BASE_URL!)

    await context.storageState({ path: "./auth.json" })

    await browser.close()

}
export default globalSetup
