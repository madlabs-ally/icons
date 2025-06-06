module.exports = {
    multipass: true,
    plugins: [
      'removeDimensions',
      'removeViewBox',
      {
        name: 'preset-default',
        params: {
          overrides: {
            // Customize which plugins are disabled
            removeViewBox: false, // keep viewBox
            cleanupIDs: false, // don’t remove IDs
          },
        },
      },
      'convertStyleToAttrs',
      'removeStyleElement',
    ],
  };
  