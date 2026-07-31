import {chromium, FullConfig  } from "@playwright/test";

import dotenv from 'dotenv'
import path from 'path'


const ENV_NAME = process.env.ENV_NAME || "qa";

dotenv.config({ path: path.resolve(__dirname, "testdata", `${ENV_NAME}.env`), });

async function globalSetup(config:FullConfig) {

   const browser = await chromium.launch()
   const context = await browser.newContext()
   const page = await context.newPage()

   await page.goto(process.env.BASE_URL!);

  await page.getByPlaceholder("username/email").fill(process.env.USER_USERNAME!);
  await page.getByPlaceholder("your password").fill(process.env.USER_PASSWORD!);
  await page.getByRole("button", { name: "Log In" }).click();

  await page.waitForURL(process.env.SP_URL!);

  await context.storageState({path: `auth/${ENV_NAME}.json`,});


  console.log("BASE_URL:", process.env.BASE_URL);
console.log("SP_URL:", process.env.SP_URL);
console.log("USER_USERNAME:", process.env.USER_USERNAME);
console.log("USER_PASSWORD:", process.env.USER_PASSWORD);

  await browser.close();

    
}

export default globalSetup