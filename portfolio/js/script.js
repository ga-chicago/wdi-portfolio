// var currentParagraph = 1;

// function swapParagraphs() {
// 	var intervalID = window.setInterval(newText, 5000);
// }

// function newText() {
// 	var getTextPlace = document.getElementById('homeText')

// 	switch (currentParagraph) {

// 		case 1:
// 			getTextPlace.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod \
// 					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
// 					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo \
// 					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \
// 					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non \
// 					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// 			currentParagraph = 2;
// 			break;

// 		case 2:
// 			getTextPlace.innerHTML = "This is text for the second paragraph.";

// 			currentParagraph = 3;
// 			break;

// 		case 3:
// 			getTextPlace.innerHTML = "And now this will be the third paragraph. Yippee!";

// 			currentParagraph = 1;
// 			break;
// 	}
// }

var firstParagraph = "Now is the time for all good men to come to the aid of their country.";

var secondParagraph = "The quick brown fox jumped over the lazy dog.";

var thirdParagraph = "Hopefully this silly thing will actually work.";

$(document).ready(function () {
      setParagraphOne();
    });

    function setParagraphOne() {
      $('#homeText').fadeIn(500).innerHTML(firstParagraph).delay(2000).fadeOut(500, function () { setImageTwo(); });
    }

    function setParagraphTwo() {
      $('#homeText').fadeIn(500).innerHTML(secondParagraph).delay(2000).fadeOut(500, function () { setImageOne(); });
    }

	function setParagraphThree() {
      $('#homeText').fadeIn(500).innerHTML(thirdParagraph).delay(2000).fadeOut(500, function () { setImageOne(); });
    }