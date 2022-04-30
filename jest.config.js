module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transformIgnorePatterns: ['/node_modules/(?!@ionic/vue|@ionic/vue-router|@ionic/core|@stencil/core|ionicons)'],
  // transform: {
  //   '^.+\.js$': 'babel-jest',
  //   '.\.(vue)$': 'vue-jest'
  // },
  // snapshotSerializers: ['jest-serializer-vue']
};
