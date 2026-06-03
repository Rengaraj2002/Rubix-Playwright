# Architecture Overview

## Purpose
This document describes the architecture of the `Ezhour_playwright` repository and how the test automation components are organized.

## Project Structure
- `package.json` - contains project metadata, Playwright dependencies, and npm scripts.
- `playwright.config.js` - Playwright test runner configuration.
- `tests/specs` - end-to-end test specifications.
- `tests/fixtures` - shared test data and environment-specific values.
- `src/pages` - page object classes that encapsulate page actions and locators.
- `playwright-report` - generated HTML report files.
- `test-results` - Playwright test artifacts and traces.

## Architecture Layers

### 1. Configuration
- `playwright.config.js` defines test directory, timeouts, reporter, parallelism, and browser projects.
- The config is intentionally CommonJS to match the rest of the repository's module usage.

### 2. Fixtures
- `tests/fixtures/userData.js` centralizes application URLs, user names, passwords, and other shared test data.
- Environment variables can override sensitive credentials for local or CI execution.

### 3. Page Object Model (POM)
- `src/pages/LoginPage.js` manages login page locators and actions.
- `src/pages/DashboardPage.js` manages dashboard navigation and permission request actions.
- `src/pages/ApplyLeavePage.js` manages leave application flows.
- `src/pages/index.js` exports page classes so tests can import them from a single entry point.

### 4. Test Specifications
- Tests in `tests/specs` instantiate page objects and execute user journeys.
- Each spec should control one user flow and keep assertions focused on expected outcomes.
- Tests use Playwright idioms such as `expect`, locator interactions, and async/await.

## Execution Flow
1. Tests start from a spec file in `tests/specs`.
2. Test data is loaded from `tests/fixtures/userData.js`.
3. Page objects are instantiated from `src/pages`.
4. Test flows navigate to the application URL, perform actions, and assert results.
5. Playwright writes artifacts to `test-results` and generates reports in `playwright-report`.

## Conventions
- Use consistent camelCase naming for methods and locators.
- Keep page object methods single-purpose and reusable.
- Prefer page object locators over inline selector usage in test files.
- Avoid debug-only statements like `page.pause()` in committed tests.

## Notes
- The repository is structured for maintainable UI automation using Playwright.
- Adding new flows should follow the existing pattern: fixture data, page object actions, and clean spec files.
