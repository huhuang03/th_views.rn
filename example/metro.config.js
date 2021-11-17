/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

const libRoot = path.resolve(__dirname, '..');

module.exports = {
  watchFolders: [libRoot],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    nodeModulesPaths: [path.join(__dirname, 'node_modules')],
    // extraNodeModules: ['react-native', 'react'],
  },
};
