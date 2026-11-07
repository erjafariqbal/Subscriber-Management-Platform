//url : https://procare-del-prerelease.north.excitel.in/

//username : username/email

/**
 * 
 * password your password
 * Type : submit
 */

import {test, expect  } from "@playwright/test";

test("test", async({page})=>{
 await page.goto("https://procare-del-prerelease.north.excitel.in/")
 await page.getByPlaceholder("username/email").fill("jafar.iqbal")
 await page.getByPlaceholder("your password").fill("")
 await page.getByRole("button",{name : "Log in"}).click()



    
})

