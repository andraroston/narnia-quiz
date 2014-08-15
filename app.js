$(document).ready(function() {



//to loop through the questions?
//for (var i = 0; i < allQuestions.length; i++)

var userScore = 0;

//to add to the counter at the bottom right
var counter = 0;
var counting = function(){
	counter += 1;
	$('#count').replaceWith("<span id='count'>" + counter + "</span>");
};

//how to play the game
var gamePlay = function() {
	
//	making sure the user has made a choice

	if(counter < 10 && ($('input[name=choice]:checked').length > 0)) {
	counting();
	}
	else{
		alert("Please choose an answer!");
	}

//	getting the value of the user choice
	var userChoice = $('input[name=choice]:checked').val()
		console.log(userChoice);

//  to add one oint to user score if answer is correct
//	var userScoring = function() {
//			if(userChoice === this.correctAnswer) {
//			userScore += 1
//		};
//	console.log(userScore);
 	
//}	

}

// how to load next question or final score




//what happens when user clicks submit button
$("#submitButton").on("click", function() {
	event.preventDefault();
	console.log("Submit Button Clicked");
	gamePlay();
	$("#possibleAnswers").find("ul").hide();
	$("#possibleAnswers").find("h3").show();
	$("#question").replaceWith("<h2 id = 'question'>" + "All done! Your score is..." + "</h2>");
});


//what happens when user clicks new game button
$("#newGame").on("click", function(){
	console.log("New Game Button Clicked")
	var userScore = 0;
	var counter = 0;
	$('#count').replaceWith("<span id='count'>" + counter + "</span>")
	});
})
