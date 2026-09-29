# Playwright UI Testing Demo

[![CI]
https://github.com/OWNER/REPO/actions/workflows/WORKFLOW_FILE.yml

An end-to-end test automation project built with **Playwright** and **TypeScript**.

This repository demonstrates how to design a maintainable UI automation framework using:
- Page Object Model (POM)
- Smoke and regression test suites
- Reusable authentication state
- Cross-browser execution
- HTML reporting
- GitHub Actions CI
- GitHub Pages project documentation

## What This Project Does

This project automates key end-to-end user flows for a web application using Playwright and TypeScript.

It provides a structured UI automation framework for validating common browser-based scenarios such as login, product interaction, sorting, cart validation, and checkout. The framework is designed to support maintainable test design, reusable page interactions, cross-browser execution, and CI-based automated test runs.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions
- GitHub Pages

## Application Under Test

This project uses [Sauce Demo](https://www.saucedemo.com/) as the public demo application for UI test automation.

It was selected because it provides stable, realistic e-commerce flows for:
- login
- product listing
- sorting
- cart validation
- checkout flow

## Implemented Test Coverage

### Smoke Tests
- Valid login
- Invalid / locked user login
- Add product to cart and verify cart contents

### Regression Tests
- Sort products by price: low to high
- Sort products by name: Z to A
- Complete checkout flow successfully

## Framework Features

- Page Object Model for reusable page interactions
- Shared authentication setup using Playwright `storageState`
- Multi-browser execution:
  - Chromium
  - Firefox
  - WebKit
- HTML test reports
- Screenshot, video, and trace collection on failures
- GitHub Actions CI execution on push and pull request

## Project Structure

```text
playwright-ui-testing-demo/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── docs/
│   ├── index.html
│   └── styles.css
├── pages/
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── playwright/
│   └── .auth/
├── tests/
│   ├── smoke/
│   │   ├── login.spec.ts
│   │   └── add-to-cart.spec.ts
│   ├── regression/
│   │   ├── sorting.spec.ts
│   │   └── checkout.spec.ts
│   └── auth.setup.ts
├── utils/
│   └── testData.ts
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/anshi43/playwright-ui-testing-demo.git
cd playwright-ui-testing-demo
```

### 2. Install dependencies
```bash
npm install
```

### 3. Install Playwright browsers
```bash
npx playwright install
```

## Run Tests

### Run the full suite
```bash
npx playwright test
```

### Run smoke tests only
```bash
npx playwright test tests/smoke
```

### Run regression tests only
```bash
npx playwright test tests/regression
```

### Run a single spec file
```bash
npx playwright test tests/smoke/login.spec.ts
```

### Open HTML report
```bash
npx playwright show-report
```

## CI Integration

This project includes a GitHub Actions workflow that:
- installs dependencies
- installs Playwright browsers
- runs the full test suite
- uploads the Playwright HTML report as an artifact

This enables the framework to run automatically in a continuous integration workflow.

## Authentication Strategy

For logged-in flows, the framework uses a dedicated Playwright setup test to authenticate once and save session state with `storageState`.

This reduces duplicated login steps in regression tests and keeps the suite cleaner, faster, and more stable.

## Reporting and Debugging

The framework is configured to support:
- HTML reports
- screenshots on failure
- video on failure
- trace on first retry

These features help investigate flaky or failing tests more efficiently.

## Project Documentation

A small project page is published with GitHub Pages to provide a quick overview of:
- framework purpose
- structure
- covered scenarios
- run commands

Project page: [https://anshi43.github.io/playwright-ui-testing-demo/](https://anshi43.github.io/playwright-ui-testing-demo/)

## Why This Project Matters

This repository demonstrates:
- maintainable UI test automation with Playwright
- reusable framework design using Page Object Model
- smoke and regression coverage for browser-based user flows
- cross-browser validation
- CI-ready automated UI testing

## Author

**Ankit Mavani**  
Berlin, Germany

- GitHub: [https://github.com/anshi43](https://github.com/anshi43)
- LinkedIn: [https://www.linkedin.com/in/ankitmavani/](https://www.linkedin.com/in/ankitmavani/)
- Email: [mavaniankit09@gmail.com](mailto:mavaniankit09@gmail.com)
