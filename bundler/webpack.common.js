/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, '../src/index.tsx'),
	output:
	{
		hashFunction: 'xxhash64',
		filename: 'bundle.[contenthash].js',
		path: path.resolve(__dirname, '../dist')
	},
	devtool: 'source-map',
	plugins:
	[
		new CopyWebpackPlugin({
			patterns: [
			{ from: path.resolve(__dirname, '../public') }
			]
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../src/index.html'),
			favicon: path.resolve(__dirname, '../public/favicon.ico'),
			minify: true
		}),
		new MiniCSSExtractPlugin()
	],
	resolve:
   {
		alias:
      {
         // package
         three: path.resolve(__dirname, '../node_modules/three'),

         // dir
         '@': path.resolve(__dirname, '../src'),
         Assets: path.resolve(__dirname, '../src/assets'),
         Components: path.resolve(__dirname, '../src/components'),
         Core: path.resolve(__dirname, '../src/core'),
         Utilities: path.resolve(__dirname, '../src/utilities'),
		},
		extensions:
		[
         '.tsx',
         '.ts',
         '.js'
      ],
	},
	module:
	{
		rules:
		[
			// HTML
			{
				test: /\.(html)$/,
				use: ['html-loader'],
		  	},

			// JS
			{
				test: /\.ts?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},

			{
				test: /\.tsx$/,
				exclude: /node_modules/,
				use: ['ts-loader'],
			},
			
			// CSS
			{
			test: /\.css$/,
			use:
			[
				MiniCSSExtractPlugin.loader,
				'css-loader'
			]
			},

			// SASS
			{
			test: /\.(s(a|c)ss)$/,
			use:
			[
				MiniCSSExtractPlugin.loader,
				'css-loader',
				'sass-loader'
			]
			},

			// Images
			{
			test: /\.(jpg|jp(e*)g|png|gif|svg)$/,
			type: 'asset/resource',
			generator:
			{
				filename: 'assets/images/[hash][ext]'
			}
			},

			// Fonts
			{
			test: /\.(ttf|eot|woff|woff2)$/,
			type: 'asset/resource',
			generator:
			{
				filename: 'assets/fonts/[hash][ext]'
			}
			}
		]
	}
}
