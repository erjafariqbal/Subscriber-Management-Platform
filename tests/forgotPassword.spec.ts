import {test, expect  } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ForgotPassword } from "../pages/ForgotPassword";

test("verify Forgot Passwor",async ({page})=>{

    const lp = new LoginPage(page)
    await lp.launchUrl(process.env.BASE_URL!)
    

    const fp = new ForgotPassword(page)

    await fp.forgotPassword(process.env.USER_EMAIL!)
    await fp.verifyFogotPage()
    
})