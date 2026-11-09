import { test } from "@playwright/test";
import { SubscriberModule } from "../pages/SubscriberModule";

let sp: SubscriberModule

test.beforeEach(async ({ page }) => {
    sp = new SubscriberModule(page)
    await sp.launchUrl(process.env.BASE_URL!)
})

test("renewal", async () => {
    await sp.launchSubscriberPage()
    await sp.searchUser(process.env.SUBSCRIBER_USERNAME!)
    await sp.userRenewal(process.env.PLAN_NAME!)
})
