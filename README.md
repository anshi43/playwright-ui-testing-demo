# Playwright UI Testing Demo

A job-focused end-to-end test automation project built with **Playwright** and **TypeScript**.

This repository demonstrates how to design a maintainable UI automation framework using:
- Page Object Model (POM)
- Smoke and regression test suites
- Reusable authentication state
- Cross-browser execution
- HTML reporting
- GitHub Actions CI
- GitHub Pages project documentation

## Project Purpose

This project was created as a portfolio repository for QA Automation / Software Test Engineer roles.

The goal is to show practical experience in:
- building structured end-to-end tests
- separating page logic from test logic
- validating real user flows
- running tests across multiple browsers
- integrating automated UI tests into CI

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

This helps demonstrate how UI automation can be integrated into a continuous integration workflow.

## Authentication Strategy

For logged-in flows, the framework uses a dedicated Playwright setup test to authenticate once and save session state with `storageState`.

This reduces duplicated login steps in every regression test and makes the suite cleaner and more stable.

## Reporting and Debugging

The framework is configured to support:
- HTML reports
- screenshots on failure
- video on failure
- trace on first retry

These features help investigate flaky or failing tests more efficiently.

## Project Documentation

A small project page is published with GitHub Pages to provide a quick overview of:
- project purpose
- framework structure
- covered scenarios
- run commands

Project page: `https://anshi43.github.io/playwright-ui-testing-demo/`

## Why This Project Matters

This repository is intended to demonstrate practical QA automation skills that are directly relevant for industry roles, especially:
- UI test automation with Playwright
- framework design with maintainable structure
- regression coverage for user-critical flows
- CI-ready automation setup
- multi-browser validation

## Author

**Ankit Mavani**  
Berlin, Germany

- GitHub: https://github.com/anshi43
- LinkedIn: https://www.linkedin.com/in/ankitmavani/
- Email: mavaniankit09@gmail.com
