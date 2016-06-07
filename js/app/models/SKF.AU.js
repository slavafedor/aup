define([], function () {

	var SKF = {};
	SKF.AU = {
		Version: "0.0.1",
		Name: "AdviserU",
		Author: "SKF",
	};

	Object.defineProperty(SKF_AU, "IMPORTANCE",
		{
			Info: 0,
			NotImportant: 1,
			SomewhatImportant: 2,
			Important: 3,
			VeryImportant: 4,
			Critical: 5
		});
		
	Object.defineProperty(SKF_AU, "QuestionType", 
		{
			YesNo,
			Rating,
			Select,
			MultipleChoice
		
		});

	return SKF.AU;
}); 