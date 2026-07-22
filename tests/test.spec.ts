import {test, expect  } from "@playwright/test";

test( "test", async({page})=>{

    await page.goto('https://procare-del-prerelease.north.excitel.in/')
    await page.getByPlaceholder("username/email").fill("testerpjafar.admin")
    await page.getByPlaceholder("your password").fill("123456s@S")
    await page.getByRole('button', {name: 'Log In'}).click()
    // await page.waitForLoadState("networkidle");
    // await expect(page.getByAltText("logo", {exact: true})).toBeVisible()
    // await expect(page.locator("div.partner-name")).toBeVisible()
    // await expect(page.getByText(" Renewals ", {exact:true})).toBeVisible()
    // await page.waitForTimeout(1000)
    // await page.getByText("Taxation Details",{exact:true}).click()
    // await expect(page.getByText("GST Number : ")).toBeVisible()    
    // await expect(page.getByText("PAN No : ")).toBeVisible() 
    // await expect(page.getByText("* contact Excitel for changes at")).toBeVisible()
    // await page.getByText("TPL:").click()
    await page.locator("[class='profile-name']").click()
    await page.getByText("Logout", {exact: true}).click()
    


   await page.waitForTimeout(3000)
})

test("Handling dropdown non select tag", async({page})=>{

    await page.goto("https://demoqa.com/automation-practice-form")

    const stateDropdown = page.locator("#react-select-3-input")
    await stateDropdown.click()

    const stateSelect = page.getByText("Haryana", {exact: true})

    await stateSelect.click()


    await page.waitForTimeout(2000)

   

})

// test("new Test Case", async ({page})=>{

//         await page.goto("https://demoqa.com/automation-practice-form")
//         const subjectdd = page.locator("##eact-select-2-placeholder")
//         await subjectdd.click()
        
//         const subjectSelect = page.getByAltText("English", {exact: true})
//         await subjectSelect.click()

//         await page.waitForTimeout(2000)
        




// })

// // test("Dropdown with Select Tag", async ({page})=>{

// // await page.goto("https://practice.expandtesting.com/dropdown")
// // await page.locator("#country").selectOption("AS")

// await page.waitForTimeout(2000)
// })