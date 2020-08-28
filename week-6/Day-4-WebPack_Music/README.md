Typescript Webpack Configuration
Prepared by : Rajavasanthan

Create an empty folder and initiate npm to generate package.json
npm init -y
Typescript should be installed globally
npm install -g typescript
Inside the Folder we can initiate a new typescript config file with command 
tsc --init
Enable Source map true
Inside the tsconfig.json uncomment 
sourceMap : true
What is Sourcemap?
The JavaScript sources executed by the browser are often transformed in some way from the original sources created by a developer. For example:
sources are often combined and minified to make delivering them from the server more efficient.
JavaScript running in a page is often machine-generated, as when compiled from a language like CoffeeScript or TypeScript.
In these situations, it's much easier to debug the original source, rather than the source in the transformed state that the browser has downloaded. A source map is a file that maps from the transformed source to the original source, enabling the browser to reconstruct the original source and present the reconstructed original in the debugger.
You can also add 
"exclude": [
	"node_modules"
]
To omit node_modules when generating the output
Install Webpack
We need to install the webpack and others as development dependencies.
npm install webpack webpack-cli -g
npm install webpack webpack-cli
npm install webpack-dev-server --save-dev
Now we need to install a locally TypeScript compiler and the TypeScript loader.
npm install typescript ts-loader --save-dev
Now we need to create webpack.config.js inside newly created folder
const path = require('path');
module.exports = {
	entry: path.join(__dirname, '/zoo.ts'),
	output: {
		filename: 'zoo.js',
		path: __dirname
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	}
}
Write you application in zoo.ts
Create index.html
Add Start Script in package.json
"scripts": {
	"start": "webpack-dev-server --mode development"
}
In command prompt Run 
npm start
Local server will be deployed in http://localhost:PORT

