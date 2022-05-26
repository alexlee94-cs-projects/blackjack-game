let player = {
	name: "Alex",
	chips: 100,
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let inGame = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ":" + " " + player.chips + " " + "chips";

function getRandomCard() {
	let randomNumber = Math.floor(Math.random() * 13) + 1;
	if (randomNumber > 10) {
		return 10;
	} else if (randomNumber === 1) {
		return 11;
	} else {
		return randomNumber;
	}
}

function startGame() {
	inGame = true;
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;
	renderGame();
}

function renderGame() {
	cardsEl.textContent = "Cards: " + cards;

	for (i = 0; i < cards.length; i++) {
		cards.textContent += cards[i] + " ";
	}

	sumEl.textContent = "Sum: " + sum;
	if (sum <= 20) {
		message = "Do you want to draw a new card?";
	} else if (sum === 21) {
		message = "Congrats!, You've got Blackjack!";
		hasBlackJack = true;
	} else {
		message = "Sorry, you lose!";
		inGame = false;
	}
	messageEl.textContent = message;
}

function newCard() {
	if (inGame === true && hasBlackJack === false) {
		let card = getRandomCard();
		sum += card;
		cards.push(card);
		renderGame();
		newCard();
	}
}
