module.exports = {
  project: {
    ios: {},
    android: {},
  },
  resolver: {
    assetExts: ['png', 'jpg', 'jpeg', 'gif'],
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
