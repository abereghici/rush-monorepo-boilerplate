# rush-monorepo-boilerplate

[![Netlify Status](https://api.netlify.com/api/v1/badges/5e8a514e-76a0-4f3a-b442-a1d189a8f0ed/deploy-status)](https://app.netlify.com/sites/rush-monorepo-boilerplate/deploys)

[rush-monorepo-boilerplate.netlify.app](rush-monorepo-boilerplate.netlify.app)

### Rush monorepo boilerplate

- RushJS with PNPM to manage monorepo
- Front End package: React SPA
- React Scripts package: build tools created on top of create-react-app. Contains build start, test, lint, lint-staged scripts
- CI/CD using Github Actions
- Formatting using Prettier
- Git hooks: pre-commit ( prettier, lint-staged ), commit-msg ( lint commits using commitlint )

## Prerequisites

This boilerplate uses [Rush](https://rushjs.io) and [PNPM](https://pnpm.io/) to manage packages in monorepo.

If you're interested in how this boilerplate was created, check out this series of posts:

- [Part 1](https://bereghici.dev/blog/build-a-scalable-front-end-with-rush-monorepo-and-react--repo-setup+import-projects+prettier): Monorepo setup, import projects with preserving git history, add Prettier

- [Part 2](https://bereghici.dev/blog/build-a-scalable-front-end-with-rush-monorepo-and-react--webpack+jest): Create build tools package with Webpack and react-scripts

- [Part 3](https://bereghici.dev/blog/build-a-scalable-front-end-with-rush-monorepo-and-react--eslint+lint-staged): Add shared ESLint configuration and use it with lint-staged

- [Part 4](https://bereghici.dev/blog/build-a-scalable-front-end-with-rush-monorepo-and-react--github-actions+netlify): Setup a deployment workflow with Github Actions and Netlify.

- [Part 5](https://bereghici.dev/blog/build-a-scalable-front-end-with-rush-monorepo-and-react--vscode): Add VSCode configurations for a better development experience.

## Quick start

```bash
# 1. Install RushJS globally
npm install -g @microsoft/rush

# 2. Clone the repository.
git clone https://github.com/abereghici/rush-monorepo-boilerplate.git my-new-monorepo

# 3. Enter your newly-cloned folder
cd my-new-monorepo

# 4. Install dependencies
rush install

# 5. Run Build in all packages
rush build

# 6. Dev: Run React App that was created as a demo project
cd apps/react-app
rushx start

```

## Enhancements and Bug Reports

If you find a bug or have an enhancement in mind, please post [issues](https://github.com/abereghici/rush-monorepo-boilerplate/issues) on GitHub.
Suggestions and feedback are very welcome!

## License

MIT
