$(document).ready(function() {

var	allQuestions = [
	        {
	        number: 1,
			question: "What type of animal is Aslan?",
			possibleAnswers: ["Bear", "Kangaroo", "Lion", "Crab"],
			correctAnswer: "Lion"
		},
		    {
	        number: 2,
			question: "What is the name of the youngest Pevensie?",
			possibleAnswers: ["Lucy", "Lily", "Linda", "Laura"],
			correctAnswer: "Lucy"
		},
		    {
			number: 3,
	        question: "How do the Pevensie children get to Narnia the first time?",
			possibleAnswers: ["Car", "Train", "Raincoat", "Wardrobe"],
			correctAnswer: "Wardrobe"
		},
		    {
	        number: 4,
			question: "In what country is the actual town Narina is named after?",
			possibleAnswers: ["France", "Italy", "USA", "Fiji"],
			correctAnswer: "Italy"
		},
		    {
	        number: 5,
			question: "What year was The Lion, The Witch, and the Wardrobe released?",
			possibleAnswers: ["1956", "1951", "1950", "1954"],
			correctAnswer: "1950"
		},
		    {
	        number: 6,
			question: "What kind of creature is Mr Tumnus?",
			possibleAnswers: ["Centaur", "Faun", "Hipporgriff", "Merman"],
			correctAnswer: "Faun"
		},
		    {
	        number: 7,
			question: "What year was the first Narnia film released?",
			possibleAnswers: ["2001", "2005", "2007", "2003"],
			correctAnswer: "2005"
		},
		    {
	        number: 8,
			question: "What sweet treat does the White Witch offer Edmund?",
			possibleAnswers: ["Chocolate", "Cupcakes", "Turkish Delight", "Banoffee Pie"],
			correctAnswer: "Turkish Delight"
		},
		    {
	        number: 9,
			question: "Which is the last book in the series?",
			possibleAnswers: ["The Horse and his Boy", "The Last Battle", "The Voyage of the Dawn Treader", "The Lion, the Witch, and the Wardrobe"],
			correctAnswer: "The Last Battle"
		},
		    {
	        number: 10,
			question: "Which university did C.S. Lewis attend?",
			possibleAnswers: ["Oxford", "Cambridge", "Edinburgh", "St. Andrews"],
			correctAnswer: "Oxford"
		}
	];

var userScore = 0;
var currentTurn = 0;


//to add to the counter at the bottom right
var counter = 1;
var counting = function(){
	counter += 1;
	$('#count').replaceWith("<span id='count'>" + counter + "</span>");
};

//how to play the game
var gamePlay = function() {
	
//	making sure the user has made a choice

	if(currentTurn < 10 && ($('input[name=choice]:checked').length > 0)) {
	counting();
	

//	getting the value of the user choice

		var userChoice = $('input[name=choice]:checked').val()
			console.log(userChoice);

	//  to add one point to user score if answer is correct
		var userScoring = function() {
				if(userChoice === allQuestions[currentTurn].correctAnswer) {
				userScore += 1
			};
		console.log(userScore);
	 	currentTurn += 1;	
		};	

		userScoring();
		}

	else{
		alert("Please choose an answer!");
	}

};


//what happens when user clicks submit button
$("#submitButton").on("click", function() {
	event.preventDefault();
	console.log("Submit Button Clicked");
	gamePlay();

// how to load next question and or final score
	if (currentTurn < 10) {
		$("#question").replaceWith("<h2 id = 'question'>" + allQuestions[currentTurn].question + "</h2>");
		$("#choice1").replaceWith("<li id = 'choice1'>" + "<input type='radio' name='choice' value='" +allQuestions[currentTurn].possibleAnswers[0]+ "'>" +allQuestions[currentTurn].possibleAnswers[0]+ "</li>");
		$("#choice2").replaceWith("<li id = 'choice2'>" + "<input type='radio' name='choice' value='" +allQuestions[currentTurn].possibleAnswers[1]+ "'>" +allQuestions[currentTurn].possibleAnswers[1]+ "</li>");
		$("#choice3").replaceWith("<li id = 'choice3'>" + "<input type='radio' name='choice' value='" +allQuestions[currentTurn].possibleAnswers[2]+ "'>" +allQuestions[currentTurn].possibleAnswers[2]+ "</li>");
		$("#choice4").replaceWith("<li id = 'choice4'>" + "<input type='radio' name='choice' value='" +allQuestions[currentTurn].possibleAnswers[3]+ "'>" +allQuestions[currentTurn].possibleAnswers[3]+ "</li>");
	}


	else {
	$("#possibleAnswers").find("ul").hide();
	$('#finalScore').replaceWith("<span id='finalScore'>" + userScore + "</span>").fadeIn(1000);
	$("#possibleAnswers").find("h3").fadeIn(1000);
	$("#question").replaceWith("<h2 id = 'question'>" + "All done! Your score is..." + "</h2>").fadeIn(1000);
	$('#count').replaceWith("<span id='count'>" + "1" + "</span>");
};
	
});


//what happens when user clicks new game button
$("#newGame").on("click", function(){
	console.log("New Game Button Clicked")
	currentTurn = 0;
	userScore = 0;
	counter = 1;
	$('#count').replaceWith("<span id='count'>" + counter + "</span>")
	$("#question").replaceWith("<h2 id = 'question'>" + allQuestions[0].question + "</h2>")
	$("#possibleAnswers").find("h3").hide();
	$("#choice1").replaceWith("<li id = 'choice1'>" + "<input type='radio' name='choice' value=" +allQuestions[0].possibleAnswers[0]+ ">" +allQuestions[0].possibleAnswers[0]+ "</li>");
	$("#choice2").replaceWith("<li id = 'choice2'>" + "<input type='radio' name='choice' value=" +allQuestions[0].possibleAnswers[1]+ ">" +allQuestions[0].possibleAnswers[1]+ "</li>");
	$("#choice3").replaceWith("<li id = 'choice3'>" + "<input type='radio' name='choice' value=" +allQuestions[0].possibleAnswers[2]+ ">" +allQuestions[0].possibleAnswers[2]+ "</li>");
	$("#choice4").replaceWith("<li id = 'choice4'>" + "<input type='radio' name='choice' value=" +allQuestions[0].possibleAnswers[3]+ ">" +allQuestions[0].possibleAnswers[3]+ "</li>");
	$("#possibleAnswers").find("ul").fadeIn('fast');
	});
})
