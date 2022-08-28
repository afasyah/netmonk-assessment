/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(
   commonConfiguration,
   {
      mode: 'production',
      plugins:
      [
         new CleanWebpackPlugin(),
      ],
   }
)
