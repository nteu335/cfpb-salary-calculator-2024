# cfpb-salary-calculator-2024

Calculate your salary under the proposed 2024 pay agreement.

![nteu-335-skull](public/img/nteu-335-skull-logo.jpg)

Calculations are in [`calculations.ts`](src/calculations.ts) and the UI is in [`Calculator.tsx`](src/pages/Calculator.tsx).

## Scripts

- `yarn dev` - Start a development server with hot reload. Edit any files and the page with automatically refresh.
- `yarn build` - Build for production. The generated files will be in the `dist` folder and can be deployed anywhere.
- `yarn test` - Run unit and integration tests related to changed files based on git.
- `yarn format` - Format all files with Prettier.
- `yarn lint` - Runs TypeScript, ESLint and Stylelint.

## Deployment

A GitHub workflow automatically deploys to a staging surge.sh domain when `main` is pushed. Deplying to nteu335.org requires transfering files via FTP.
