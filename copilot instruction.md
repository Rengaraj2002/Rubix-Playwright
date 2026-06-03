# Copilot Instructions

## Purpose
This file guides GitHub Copilot when assisting with the `Ezhour_playwright` repository. It defines repository structure, test conventions, and page object patterns.

## Project Overview
- This repository uses Playwright for end-to-end testing.
- Tests live in `tests/specs`.
- Page objects live in `src/pages`.
- Shared fixtures and test data live in `tests/fixtures`.
- Generated reports are stored in `playwright-report` and should not be edited manually.

## Key Files
- `package.json` - dependency management and test scripts.
- `playwright.config.js` - test runner configuration, browser settings, timeouts, and reporters.
- `tests/specs/*.spec.js` - test specifications.
- `src/pages/*.js` - page object models and reusable actions.
- `tests/fixtures/userData.js` - shared login and user data.

## Coding Conventions
- Use descriptive test and step names.
- Keep page object methods single-purpose and reusable.
- Use selectors in page classes, not directly in spec files.
- Use `async/await` consistently with Playwright commands.
- Avoid fixed waits; use Playwright waiting mechanisms like `locator.waitFor()`, `page.waitForLoadState()`, and auto-waiting actions.

## Page Object Guidance
- Page classes should expose clear actions (e.g. `login`, `navigateTo`, `applyLeave`).
- Keep selectors private to page classes where possible.
- Export page classes from `src/pages/index.js` only when they are reused across multiple specs.
- Prefer locator methods and safe assertions inside page objects.

## Test Behavior
- Tests should be reliable and deterministic.
- Reuse existing fixtures for shared test data and setup.
- Keep test steps focused on a single user flow.
- Use Playwright assertions (`expect`) for validation.

## When Editing
- Add new specs to `tests/specs` with `.spec.js` extension.
- Add new page objects to `src/pages`.
- Add shared data to `tests/fixtures`.
- Do not modify `playwright-report`, `test-results`, or other generated output folders unless required for debugging.

## Best Practices for Copilot
- Prefer Playwright idioms over generic automation patterns.
- Suggest code consistent with the existing page object model structure.
- Provide concise, relevant code examples.
- Avoid introducing flaky waits or brittle selectors.
- Keep changes minimal and targeted to the requested feature or fix.

## Running Tests
Use the repository scripts or Playwright CLI:
- `npm test`
- `npx playwright test`

## Notes
- This repository is primarily focused on Playwright test automation.
- Maintain test reliability, readability, and maintainability.

## Secret Code
- `Rubix-9965`
