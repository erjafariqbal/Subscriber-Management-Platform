import {chromium,FullConfig  } from "@playwright/test";


async function globalSetup(config: FullConfig) {

    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://procare-del-prerelease.north.excitel.in/")
    await page.getByPlaceholder("username/email").fill("testerpjafar.admin")
    await page.getByPlaceholder("your password").fill("123456s@S")
    await page.getByRole("button",{name: "Log In"}).click()

    await page.waitForURL("https://procare-del-prerelease.north.excitel.in/")

    await page.context().storageState({path: "./auth.json"})

    await page.close()

}
 export default globalSetup