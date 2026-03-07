# CI/CD Pipeline Fixes - TODO List

## Task Overview
Fix CI/CD pipeline failures:
- backend-test (push) Failing after 31s
- frontend-build (push) Failing after 3s
- docker-build (push) Skipped
- deploy (push) Skipped

## Implementation Steps

### 1. Fix Backend Test Pipeline
- [x] Add Jest and testing dependencies to backend/package.json
- [x] Add test script to backend/package.json
- [x] Create basic test file for health endpoint

### 2. Fix Frontend Build Pipeline
- [x] Remove @tailwindcss/vite and @tailwindcss/postcss (v4 packages)
- [x] Update frontend/package.json to use Tailwind v3 only
- [x] Update postcss.config.js for Tailwind v3
- [x] Update vite.config.js (remove babel-plugin-react-compiler)
- [x] Verify tailwind.config.js compatibility

### 3. Verify Fixes
- [ ] Run npm install in backend
- [ ] Run npm install in frontend
- [ ] Run backend tests locally
- [ ] Run frontend build locally

