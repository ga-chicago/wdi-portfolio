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

//Global Variables
playDeck = [1/1, 1/2, 1/3, 1/4, 1/5, 1/5, 2/2, 2/4, 3/6, 4/8, 5/10];

boardDeck = [2/4, 3/6, 4/8, 5/10];

//Create Board

var board = $('<div>')

//Create Card in Play Area

//Create Button & Timer Area


//CREATE TIMER 
//var timeClock = $('<div>');

// var countdown function (){					//called when user clicks start
// 	var sec = 15; 							//....default
// 	var count = setInterval(function(){
// 	$('timer.count').text(sec--)
// 	if (sec == -1){
// 		scoreIt();
// 		resetStartButton();
// 		$('timer.count').fadeOut('slow')
// 		clearInterval(count);
// 		console.log(sec);
// 	}
// }, 1000);			
//  ('inPlay').append('timeClock')	
// }

//CREATE BUTTONS
var easyBtn = $('<button>EASY</button>').click(function(){
	buttons.append(easyBtn);


	console.log('easyBtn clicks!')
})

easyBtn.prop('id', 'easyBtn')
//$('sec') = 7;
//add functionality
//append to buttonsDiv[0]

var startBtn = $('<button>');
startBtn.prop('id, startBtn');
//countdown().click;
//add functionality
//append to buttonsDiv[1]

var hardBtn = $('<button>');
hardBtn.prop('id', 'hardBtn')
//add functionality
//append to buttonsDiv[2]

var easyBtnGrey = $('<button>');
easyBtnGrey.addClass('nofunct');
//add to buttonsDiv[0] default hide

var startBtnGrey = $('<button>');
startBtnGrey.addClass('nofunct');
//add to buttonDiv[1] default hide

var hardBtnGrey = $('<button>');
hardBtnGrey.addClass('nofunct');
//add to buttonsDiv[2] default hide


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
// 2. The can leave the default of easy or press hard to change the timer 
// 3. The clock begins to count down
// 4. The user has to click all of the equivalent fractions on the board 
//    set qual to the card in play before time runs time runs fadeOut
// 5. Each correct answer turns the card green and adds 100 points
// 6. Each wrong answer turns the card red and subtracts 75 points
// 7. When the clock hits zero the score is flashed and the button to 
//    play again appears






 


