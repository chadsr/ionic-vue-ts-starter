# example-app

[![Build](https://github.com/Chadsr/ionic-vue-ts-boilerplate/actions/workflows/build.yml/badge.svg)](https://github.com/Chadsr/ionic-vue-ts-boilerplate/actions/workflows/build.yml)
[![CodeQL](https://github.com/Chadsr/ionic-vue-ts-boilerplate/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/Chadsr/ionic-vue-ts-boilerplate/actions/workflows/codeql-analysis.yml)
[![Reviewdog](https://github.com/Chadsr/ionic-vue-ts-boilerplate/actions/workflows/reviewdog.yml/badge.svg)](https://github.com/Chadsr/ionic-vue-ts-boilerplate/actions/workflows/reviewdog.yml)

## Development

### Yarn

1. Setup Yarn:

```command
corepack enable
yarn set version stable
yarn install
```

### VSCode

1. Setup Yarn VSCode integrations:

```command
yarn dlx @yarnpkg/sdks vscode
```

## Known Issues / Future Improvements

### Stencil vs Vite

`stencil` and its dynamic imports does not currently play well with `vite`. Once [this issue](https://github.com/ionic-team/stencil/issues/2827) is resolved, `vue-cli-service` can be replaced with `vite`.
