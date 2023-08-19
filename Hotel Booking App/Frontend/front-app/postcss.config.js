const path = require('path');

module.exports = {
  module: {
    rules: [
      // ...
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      
      // ...
    ],
  },
  output: {
    // ...
    module: "esnext", // or "auto"
  },
}

