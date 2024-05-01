# cfpb-salary-calculator-2024

Calculate your salary under the proposed 2024 pay agreement.

![nteu-335-skull](public/img/nteu-335-skull-logo.jpg)

- [Vite](https://vitejs.dev) with [React](https://reactjs.org), [TypeScript](https://www.typescriptlang.org) and [absolute imports](https://github.com/aleclarson/vite-tsconfig-paths).
- [Tailwind CSS v3](https://tailwindcss.com) with a [basic reset for form styles](https://github.com/tailwindlabs/tailwindcss-forms) and a [Prettier plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) that automatically sorts classes.
- Uses [ESLint](https://eslint.org), [stylelint](https://stylelint.io) and [Prettier](https://prettier.io) with VSCode integration.
- [PWA](https://github.com/antfu/vite-plugin-pwa) with [17/17 Lighthouse score](https://web.dev/pwa-checklist/).
- Unit and integration tests with [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/).
- E2E tests with [Cypress](https://www.cypress.io).

## How to dev

1. Install [Node](https://nodejs.org/en) v18+
1. `yarn`
1. `yarn dev`
1. Everything is in [`calculations.ts`](src/calculations.ts) and [`Calculator.tsx`](src/pages/Calculator.tsx). There's no stylesheet, use tailwind utility classes instead.

## Scripts

- `yarn dev` - Start a development server with hot reload.
- `yarn build` - Build for production. The generated files will be in the `dist` folder and can be deployed anywhere.
- `yarn test` - Run unit and integration tests related to changed files based on git.
- `yarn format` - Format all files with Prettier.
- `yarn lint` - Runs TypeScript, ESLint and Stylelint.

## Deployment

A GitHub workflow automatically deploys to a staging surge.sh domain when `main` is pushed. Deploying to nteu335.org requires transfering files via FTP.
