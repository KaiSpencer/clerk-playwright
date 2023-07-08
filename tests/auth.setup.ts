import { expect, test as setup } from "@playwright/test";

const authFile = "tests/user.json";

setup("authenticate", async ({ page, browser }) => {
  console.log("[Clerk] Signing in");

  await page.goto("/");
  await expect(page).toHaveURL(
    "/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F"
  );

  await page.getByLabel("Email address", { exact: true }).fill("auth@user.com");
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await page.getByLabel("Password", { exact: true }).fill("auth");
  await page.getByRole("button", { name: "Continue", exact: true }).click();

  await page.context().storageState({ path: authFile });

  console.log("[Clerk] Signed in");
});
