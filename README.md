# example-app

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
