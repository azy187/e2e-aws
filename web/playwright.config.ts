import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    testDir: "./playwright/tests",
    outputDir: "./playwright/results",
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: [["html", { outputFolder: "./playwright/reports" }]],
    use: {
        //   httpCredentials: {
        //     username: "atlas",
        //     password: "atlas"
        //   },
        trace: "on-first-retry",
    },
    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] },
        },
        {
            name: "firefox",
            use: { ...devices["Desktop Firefox"] },
        },
        {
            name: "webkit",
            use: { ...devices["Desktop Safari"] },
        },
    ],
});
