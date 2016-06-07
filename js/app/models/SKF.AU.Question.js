var requirejs = require('requirejs');
requirejs.config({
    nodeRequire: require
});


define([
	'require',
	'SKF.AU',
	'SKF.Common'
	], function(require, SKF_AU, SKF_Common) {
	'use strict';
	
	SKF_AU.Question = function( options){
		var me = this;
		me.
		me.questionType = options.questionType|| SKF_AU.QuestionType.Rating; 
		me.title = options.title || "Question";
		me.Description = options.description || "";
		me.importance = options.importance || SKF_AU.IMPORTANCE.Info;
	};
	
	return SKF_AU.Question;
});