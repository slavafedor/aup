var requirejs = require('requirejs');

requirejs.config({
    //Use node's special variable __dirname to
    //get the directory containing this file.
    //Useful if building a library that will
    //be used in node but does not require the
    //use of node outside
    baseUrl: __dirname,

		//Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require,
		
});


var AdviserU;
requirejs(["./models/SKF.AU"],function(SKF_AU){
	AdviserU = SKF_AU;
});

module.exports = () => {
  return AdviserU;
};