console.log('JS is loaded!');

//Define A Card
// $('card') = function(numerator, denominator, value, divider){
// 	var numerator = [];
// 	var denominator = [];
// 	var divider = "/"
// 	var value = numerator/denominator;
//}

//create Decks
var decks = [
[{text: "8/10", value: .8},{text: "3/4", value: .75}, {text: "1/5", value: .2}, 
{text: "3/8", value: .375}, {text: "6/10", value: .6}, {text: "4/5", value: .8, ans:.8 }],

[{text: "4/8", value: .5},{text: "5/1", value: 5}, {text: "100/200", value: .5}, 
{text: "3/24", value: .125}, {text: "4/2", value: 2}, {text: "1/8", value: .125, ans:.125 }],

[{text: "8/16", value: .5},{text: "19/20", value: .95}, {text: "12/16", value: .75}, 
{text: "9/10", value: .9}, {text: "6/10", value: .6}, {text: "3/4", value: .75, ans:.75 }],

[{text: "7/7", value: 1},{text: "7/21", value: .333}, {text: "7/28", value: .25}, 
{text: "7/14", value: .5}, {text: "7/56", value: .125}, {text: "1/3", value: .333, ans:.333}],

[{text: "3/5", value: .6},{text: "15/20", value: .80}, {text: "2/5", value: .4}, 
{text: "3/8", value: .375}, {text: "4/4", value: 1}, {text: "8/20", value: .4, ans:.4 }],

[{text: "3/20", value: .15},{text: "12/18", value: .667}, {text: "1/5", value: .2}, 
{text: "3/9", value: .333}, {text: "4/10", value: .4}, {text: "6/9", value: .667, ans:.667 }],

[{text: "7/20", value: .35},{text: "6/8", value: .75}, {text: "14/7", value: 2}, 
{text: "6/16", value: .375}, {text: "3/5", value: .6}, {text: "6/3", value: 2, ans:2 }]

];

//new game

var deckNum = 0;

function newGame(){
	$('#1').data('value',decks [deckNum][0].value).text(decks [deckNum][0].text); 
	$('#2').data('value',decks [deckNum][1].value).text(decks [deckNum][1].text); 
	$('#3').data('value',decks [deckNum][2].value).text(decks [deckNum][2].text); 
	$('#4').data('value',decks [deckNum][3].value).text(decks [deckNum][3].text); 
	$('#5').data('value',decks [deckNum][4].value).text(decks [deckNum][4].text); 
	$('.playCard').data('value',decks [deckNum][5].value).text(decks [deckNum][5].text);
	deckNum++;
}

//Create a Deck of Cards Dynamically
// $('deck') = function (n, d, value){
// 	for (n = 0; n <= 10; n++){
// 		for (d = 0; d <=10; d++) {
// 			var $('cardInDeck').text.innerHTML(n + divider + d);
// 			var $('cardInDeck').value = (n / d);
// 		}
// 	}
// }

//Initiate Game
// $(document).ready() 
// $('init') = function(){
// 	numerator = ""
// 	denominator	= ""
// 	$('start').undhide;
// 	$('easy').undhide;
// 	$('hard').unhide;
// 	$('timer').hidden;
// 	$('reset').hidden;
// }

//Define Buttons and functions
// $('easy').click(function({
// 	$('countdown').sec = 10;
// })

// $('easy').click(function({
// 	$('countdown').sec = 20;
// })


//Start Game
// $('.start').click(function(){
// 	sec = 0;
// 	$('timer').unhide;
// 	$('countdown')();
// 	$('start').hidden;
// 	$('easy').hidden;
// 	$('hard').hidden;

// })

//init timer
// $('.countdown') = function (sec, count){		//called when user clicks start
// 		var sec = 15; 							
// 		var count = setInterval(function(){
// 		$('clock.count').text(": " + sec--)
// 		if (sec == -1){
// 			$('clock.count').fadeOut('slow')
// 			console.log(sec);
// 			clearInterval(count);
// 		}
// }, 1000);										//counts in miliseconds

//Score It! - keeps score in the game 
scoreValue = 0;

function scoreIt (){
$('.score').text(score +=50);
	$('.scoreValue').text(score);
}

//Play the Game	
var score = 0;
	$('.cards').click(function(e){
		console.log('clicked');
		var clickValue = $(e.target).data('value');	
		var playValue = $('.playCard').data('value');	
	if (clickValue === playValue){
			alert('You Got It!')
			scoreIt();
			newGame();				//gives games speed-action
	}
	else {
		alert('try Again.');	
	}
});


//Create Button & Timer Area


//CREATE TIMER 
// $('.clock') countdown function(sec, count){		//call when each deck is played
// 		var sec = 15; 							//....default
// 		var count = setInterval(function(){
// 		$('.clock.').text(": " + sec--)
// 			console.log(sec)
// 			if (sec == -1){
// 			$('.clock').fadeOut('slow')
// 			clearInterval(count);
// 			}
// 		}, 1000);			
// }
// countdown();



//CREATE BUTTONS
$('.start').click(function(e){
	countdown();
	console.log('start!')
})

$('.reset').click(function(e){
	console.log('reset!')
	window.location.reload(true);
})

$('.easy').click(function(e){
	var sec = 25;
	$('clock').text(":" + 25);
	console.log('easy! timer set at: ' + sec + ' seconds');
})

$('.hard').click(function(e){
	var sec = 15
	$('clock').text(":" + 15);
	console.log('hard! timer set at: ' + sec + ' seconds');

})

//board is an object w/properties
//inPlay is an object w/properties
//inPlayDeck is array of card values
//boardDeck is array of arrays card values
//var score = 0, 						
//you rock is an function

//DISABLE BUTTONS
// var buttonsDisable = function(){	//Function to disable the all the buttons
// 	$('easyBtnGrey').unhide;		//not called until user presses start
// 	$('hardBtnGrey').unhide;
// 	$('StartBtn').undhide;
// 	$('easyBtn').hide;
// 	$('hardBtn').hide;
// 	$('StartBtn').hide;
// },

//START GAME
// $('#startBtn').start(function){		//function that starts the game and 
// 	var startGame = $('<button>', 		//hides buttons that can't ge used
// 	{text: 'START', 
// 	click: function(){
// 		setInterval(timer);		
// 		$('easyBtnGrey').unhide;	
// 		$('hardBtnGrey').unhide;	
// 		$(this.btn).hidden			
// 		$('startGreyBtn').hidden;
// 	}	
// 	})	
// }
							
// startGame();



//USER STORY:
// 1. User presses Start
// 2. The usercan leave the default of easy or press hard to change the timer 
// 3. The clock begins to count down
// 4. The user has to click all of the equivalent fractions on the board 
//    set qual to the card in play before time runs time runs fadeOut
// 5. Each correct answer turns the card green and adds 100 points
// 6. Each wrong answer turns the card red and subtracts 75 points
// 7. When the clock hits zero the score is flashed and the button to 
//    play again appears




 


