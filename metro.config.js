module.exports = {
    // assets: ['./assets/fonts/', './assets/iconssetting.png', './assets/profile.png', 
    // './assets/iconsnotification.png','./assets/1-system-iconshome.png'],


      
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
  