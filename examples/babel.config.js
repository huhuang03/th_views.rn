const path = require('path');
const pak = require('../package.json');

// why not work?
console.log('__dirname: ', __dirname);

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['tsx', '.ts', '.js', '.json'],
        alias: {
          [pak.name]: path.join(__dirname, '..', pak.main),
        },
      },
    ],
  ],
};
