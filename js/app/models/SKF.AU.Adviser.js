define(["SKF.AU"], function(SKF_AU){

	Object.defineProperty(SKF_AU, "ADVISER_TYPE",
		{
			Random: 0,
			Assistant: 1,
			Weighted: 2,
		});
	
	SKF_AU.Adviser = function( adviserType){
		
	}

	return SKF_AU.Adviser;
});