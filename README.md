### 🧪 Test Automation Framework using **TypeScript** & **Playwright**

---

## 📦 1. Setup Instructions

### ✅ Prerequisites:
- Node.js (v16+ recommended)
- npm or yarn
- Git

### 🚀 Install & Setup:

npm install -D @playwright/test typescript ts-node
npx playwright install

## 2. Running Tests Locally
### Run UI and API Tests:

-npm run test


### View Test Results:
- Screenshots are saved in the `screenshots/` folder.
- Videos are saved in the 'videos/' folder.
- Test reports are available in the `playwright-report/` folder.


## 3. CI/CD Integration (GitHub Actions)

A GitHub Actions pipeline (`playwright-ci.yml`) is included. It runs tests on every push and PR to `main`.

### CI/CD Workflow Steps:
1. Clone repository/Checkout code
2. Run UI and API tests
3. Upload test results as artifacts

To trigger the pipeline, push changes to the `main` branch or create a pull request.

