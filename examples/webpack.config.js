const path = require('path')
// module.exports = config;
// module.exports = {
//   resolve: {
//     alias: {
//
//     };
//   },
// };

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        include: path.resolve(root, '')
      },
    ],
  },
};
