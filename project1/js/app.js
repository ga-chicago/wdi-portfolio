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

// Initiate Game
// $(document).ready() 
// $('cards').hidden();
// }

// function pulse(){
// 	$('.clockValue').delay(200).fadeOut('slow').delay(50).fadeIn('slow',pulse);
// }

//Score It! - keeps score in the game 
scoreValue = 0;

function scoreIt (){
$('.score').text(score +=50);
	$('.scoreValue').text(score);
}

//PLAY THE GAME	- the clicking action the chooses fractions and changes board
var score = 0;
	$('.cards').click(function(e){
		console.log('clicked');
		var clickValue = $(e.target).data('value');	
		var playValue = $('.playCard').data('value');	
	if (clickValue === playValue){
		$(this).effect('pulsate', {times:1}, 2000);
		scoreIt();
//			alert('You Got It!')
		newGame();				//called here gives game some continuous speed
	}
	else {
		alert('try Again.');	
	}
});

//CREATE TIMER and countdown function
var sec = 15;
countdown = function(){		//call when each deck is played
		var count = setInterval(function(){
		$('.sec').text(sec--);
			$('.clockValue').text(sec);
			console.log(sec);
			if (sec == 0){
				$('.clockValue').text('TIMES UP!');
//				$('.clockValue').fadeOut('slow');
				clearInterval(count);
			}
		}, 1000);			
}
$('cards').hide();


//CREATE BUTTONS - start, reset and change difficulty
$('.start').click(function(e){			//starts clock and toggles buttons
	countdown();
	$('.start').hide();
	$('.easy').hide();
	$('.hard').hide();
	console.log('start!')
})

$('.reset').click(function(e){			//refreshes page and restarts game
	console.log('reset!')
	window.location.reload(true);
})

$('.easy').click(function(e){			//makes game easy
	$('clockValue').text('25');
	sec = 25;
  
	console.log('easy! timer set at: ' + sec + ' seconds');
})

$('.hard').click(function(e){			//makes game harder
	sec = 15;
	$('clockValue').text('15');
	console.log('hard! timer set at: ' + sec + ' seconds');

})






 


