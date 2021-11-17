const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          'th_views.rn': path.join(__dirname, '..', 'src', 'index.ts'),
        },
      },
    ],
  ],
};
