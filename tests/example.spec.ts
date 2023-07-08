import { test, expect } from "@playwright/test";

test("Authenticated test", async ({ page }) => {
  /**
   * No authentication required per test
   */
  await page.goto("/");

  await expect(
    page.getByText(`Hello: ${process.env.TEST_EMAIL}`)
  ).toBeVisible();
});
