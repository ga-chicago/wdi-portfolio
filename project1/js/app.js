console.log('JS is loaded!');

//create the basic DOM structure in HTML add other features dynamically

//create a sticky header so the header remains as user scrolls
$('window').scroll(function(){
	if($(this).scrollTop() > 1){
		$('header').addClass("sticky");
	}
	else{
		$('header').removeClass("sticky");
	}
});


									//define global variables
									//think about all of the elements of the game
//smCard is object w/properties 
//lgCard is object w/properties
var easyBtn = $('<button id = "easyBtn"'),
var hardBtn = $('<button id = "hardBtn"'),
var startBtn = $('<button id = "start"'),
var easyBtnGrey = $('<button id = "easyBtnGrey">'),
var hardBtnGrey = $('<button id = "hardBtnGrey"'),
var startBtnGrey = $('<button id = "startBtnGrey"'),

var countdown function (){					//called when user clicks start
	var sec = 15; 							//....default
	var timer = setInterval(function(){
	$('###div.timer').text(sec--)
	if (sec == -1){
		scoreIt();
		resetStartButton();
		$('###div.timer').fadeOut('slow')
		clearInterval(timer);
		console.log(sec);
	}
}, 1000);				
}

var timer = setInterval(function(){
	$('###div.countdown').text(sec--)
	if (sec == -1){
		scoreIt();
		resetStartButton();
		$('###div.countdown').fadeOut('slow')
		clearInterval(timer);
		console.log(sec);
	}
}, 1000);
//board is an object w/properties
//inPlay is an object w/properties
//inPlayDeck is array of card values
//boardDeck is array of arrays card values
var score = 0, 						
//you rock is an function


var buttonsDisable = function(){	//Function to disable the all the buttons
	$('easyBtnGrey').unhide;		//not called until user presses start
	$('hardBtnGrey').unhide;
	$('StartBtn').undhide;
	$('easyBtn').hide;
	$('hardBtn').hide;
	$('StartBtn').hide;
},

$('#startBtn').start(function){		//function that starts the game and 
	var startGame = $('<button>', 		//hides buttons that can't ge used
	{text: 'START', 
	click: function(){
		setInterval(timer);		
		$('easyBtnGrey').unhide;	
		$('hardBtnGrey').unhide;	
		$(this.btn).hidden			
		$('startGreyBtn').hidden;
	}	
	})	
}
							
startGame();



							//create a countdown timer in seconds that starts at a default of 15
							//the timer must coundown to 0.  Every interval it should check to see if 
							//it hit 0 and call the score it function at 0.  It should call the 
							//scoreIt function and the resetStartButton function at the end.
//var sec = 15 //default
// var timer = setInterval(function(){
// 	$('###div.countdown').text(sec--)
// 	if (sec == -1){
// 		scoreIt();
// 		resetStartButton();
// 		$('###div.countdown').fadeOut('slow')
// 		clearInterval(timer);
// 		console.log(sec);
// 	}
// }, 1000);




//USER STORY:
//user presses start button to begin game



//the first card flips on the large deck and all cards flip on the board


//the easy and start buttons turn grey and function goes off

//the start button hides and is repalced by a grey non-functional button
//until the timer = 0

//the game timer begins when the timer ends the score is caculated and unhides


//the user plays by clicking cards.  If the small card on the board is equivalent 
//to the large card in play the card turns green and score is increased by 100
// if the card is not equal the card turns red and score is decreased by 50

//when the timer hits zero the user can reset the game to a new board
//a green reset button will unhide and the grey start button will hide

 


