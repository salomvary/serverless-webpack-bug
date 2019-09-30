const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: [
        'comp-b',
        'comp-c'
      ]
    })
  ]
};
