# Clerk Playwright

An example of how to implement [Playwright](https://playwright.dev/) testing with Clerk Authentication.

## Setup Prerequisites

### Clerk Credentials

Copy the .env.example into a .env.local file with your Clerk credentials.

Grab your `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` from your Clerk Dashboard.

## How it works

### Login prior to tests

The `auth.setup.ts` file contains a function that will login to Clerk prior to running tests.

This will save a the authentication cookies so that future tests do not need to authenticate again, they simply re-use the user session.

Cookie details are saved to `/tests/user.json`

The Playwright configuration below shows how the saved cookies are picked up by the tests.

```ts
{
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        storageState: "tests/user.json",
      },
      dependencies: ["setup"],
    },
```
