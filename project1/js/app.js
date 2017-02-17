console.log('JS is loaded!');

//create a sticky header so the header remains as user scrolls
$(window)scroll(function(){
	if($(this).scrollTop() > 1){
		$('header').addClass("sticky");
	}
	else{
		$('header').removeClass("sticky");
	}
});
//add a logo and shareable social media buttons



//create a three column layout for center with the center being larger 
//than the two sides


//create a footer that sticks to the bottom of the page
//include info the designer, when game was made

//create the board area 

//create the 12 small cards for the board area

//create the in play area

//create the large card for the in play area

//add an image of a deck to go next to the card in play.

//first board is set for user on page load


//the user leaves the default easy or presses the hard button to begin
//if the user uses easy the timer is set at 15 seconds
//if the uses chooses hard the timer is set to 7 seconds


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

 


