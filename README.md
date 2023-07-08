# Clerk Playwright

An example of how to implement [Playwright](https://playwright.dev/) testing with Clerk Authentication.

## Setup Prerequisites

### Credentials

Copy the .env.example into a .env.local file.

Grab your `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` from your Clerk Dashboard.

Populate `TEST_EMAIL` and `TEST_PASSWORD` with a test user that you have created in your Clerk Dashboard.

## How it works

### Login prior to tests

The `auth.setup.ts` file contains a function that will login to Clerk prior to running tests.

This will save a the authentication cookies so that future tests do not need to authenticate again, they simply re-use the user session.

### Key files

`auth.setup.ts` contains the function that will login to Clerk prior to running tests.

Cookie details are saved to `/tests/user.json`

`storageState` in `playwright.config.ts` is used to load the cookies from the `auth.setup.ts`.
