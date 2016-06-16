console.log("JS file is connected to HTML! Woo!")
//create card variables
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
*/

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var wins = 0;
var loses = 0;

/*if cardOne == cardTwo {
	alert('You found a match!');
}

else {
	alert('Sorry, try again.');
}*/

var gameBoard = document.getElementById('game-board')

//test if cards are a match
function isMatch(array) {
	if (array[0] !== array[1]) {
		alert('You did not find a match. Try again.');
		loses++;
	}

	else{
		alert('You found a match!');
		wins++;
	}
	//remove innerHTML of all cards to reset game board
	for (var i=0; i<4; i++) {
		document.getElementsByClassName('card')[i].innerHTML = '';
	}
	//update win counter
	document.getElementById('counter').textContent = 'Wins: '+ wins;
}

function isTwoCards() {
	//flip card
	var type = this.getAttribute('data-card');
	if (type == 'king'){
		this.innerHTML = '<img src="Hearts 13.png" alt="King of Hearts" />';
	}
	else {
		this.innerHTML = '<img src="Hearts 12.png" alt="Queen of Hearts" />';
	}
	//obtain attribute of card
	cardsInPlay.push(type); 

	//check if two cards have been selected
	if (cardsInPlay.length == 2) {
		//pass cardsinPlay into isMatch function
		isMatch(cardsInPlay);
		cardsInPlay=[]; //reset array
	}
}

function createBoard() {

	for(var i=0; i<4; i++) {
		var newDiv = document.createElement('div');
		newDiv.className = 'card';
		newDiv.setAttribute('data-card', cards[i]);
		newDiv.addEventListener('click', isTwoCards);
		gameBoard.appendChild(newDiv);
	}
	//initialize win counter
	var newP = document.createElement('p');
	newP.id = 'counter';
	newP.textContent = 'Wins: ';
	gameBoard.appendChild(newP);
}


createBoard();