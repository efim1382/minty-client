const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
	entry: "./src/app.js",

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/",
	},

	resolve: {
		extensions: [
			".js",
			".jsx",
			".json",
		],

		alias: {
			"components": `${__dirname}/src/components`,
			"compositions": `${__dirname}/src/compositions`,
			"pages": `${__dirname}/src/pages`,
			"hooks": `${__dirname}/src/hooks`,
			"helpers": `${__dirname}/src/helpers`,
			"styles": `${__dirname}/src/styles`,
		},

		modules: [
			`${__dirname}/node_modules`, "node_modules",
		],
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},

			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},

			// unused now (importing icons as react component)
			{
				test: /\.svg$/,
				use: ["@svgr/webpack"],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),

		new Dotenv(),
	],

	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},

		historyApiFallback: true,
		port: process.env.PORT || 3000,
	},
};
