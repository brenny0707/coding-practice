let path = require("path"); //allows resolving of app's path, default nodejs library that's available after installing nodejs

let DIST_DIR = path.resolve(__dirname, "dist"); //copy everything that's prepared to the dist folder
let SRC_DIR = path.resolve(__dirname, "src"); //denotes the folder which webpack will pull the code from to compile

let config = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/" //important for webpack-development-server
  },
  module: {
    loaders: [
      {
        test: /\.js?/, //tells webpack which files should be checked with loaders
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-2"] //babel-react presets 
        }
      }
    ]
  }
};

module.exports = config; //webpack will read the config object and configure itself accordingly
