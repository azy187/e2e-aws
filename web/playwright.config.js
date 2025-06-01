"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("@playwright/test");
exports.default = (0, test_1.defineConfig)({
    testDir: "./playwright/tests",
    outputDir: "./playwright/results",
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: [["html", { outputFolder: "./playwright/reports" }]],
    use: {
        trace: "on-first-retry",
    },
    projects: [
        {
            name: "chromium",
            use: __assign({}, test_1.devices["Desktop Chrome"]),
        },
        {
            name: "firefox",
            use: __assign({}, test_1.devices["Desktop Firefox"]),
        },
        {
            name: "webkit",
            use: __assign({}, test_1.devices["Desktop Safari"]),
        },
    ],
});
