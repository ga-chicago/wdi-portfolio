console.log('JS is loaded!');

//create the basic DOM structure in HTML add other features dynamically

// create a sticky header so the header remains as user scrolls
// $('window').scroll(function(){
// 	if($(this).scrollTop() > 1){
// 		$('header').addClass("sticky");
// 	}
// 	else{
// 		$('header').removeClass("sticky");
// 	}
// });

//Global Variables

//Load and Initiate the Game
var matches = 0
var score = function {
	matches * 50;
}
$(start);

function $(start) {

	//hide-unhide winner message
	$('winner').hide();
	$('winner').css({
		color: Green;
	})

//Reset game cards empty 
$('cards') = ();
$('equals')	= ();

}

//Create row of card slots to drag to #board


//Create row of cards to drap #inPlay


//function to check each match and drop cards




//Define the cards
// var numerator = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var denominator = [0, 1., 2, 3, 4, 5, 6, 7, 8, 9];
// var slash = "__";
// var value = []; 
// var count = 0;



//Create cards to play (#inPlay)
// function makeCardDeck(margin){
// 	var left = 0;
// 	var step = margin;
// 	var s = 0

// $('.cards').each(function(){	
// 	$(this).css({'z-index' : s});
// 	$(this).css({'margin-left' :left + 'px'});
// 	$(this).css({'margin-top' :0 + 'px'});
// 	left = left + step;
// 	s++;
// });
// }

//Create board to drag cards to (#board)

//Create Shuffle Function (run inside start function)



//Create Deal function (run inside start function)

//Create Board
//Create 12 playing cards on board


//Create Card in Play Area

//Create Button & Timer Area


//CREATE TIMER 
// var timeClock = $('<div>');
// 	var countdown = function (){					//called when user clicks start
// 		var sec = 15; 							//....default
// 		var count = setInterval(function(){
// 		$('timer.count').text(": " + sec--)
// 		if (sec == -1){
// 			scoreIt();
// 			resetStartButton();
// 			$('timer.count').fadeOut('slow')
// 			clearInterval(count);
// 			console.log(sec);
// 		}
// }, 1000);			
//  ('timer').append('timeClock')	
// }

//CREATE BUTTONS
// var easyBtn = $('<button>EASY</button>').click(function(){
// 	easyBtn.prop('id', 'easyBtn')
// 	buttons.append(easyBtn);


// 	console.log('easyBtn clicks!')
// }

//$('sec') = 7;
//add functionality
//append to buttonsDiv[0]


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




 


