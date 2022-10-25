const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const dealButton = document.getElementById("deal-button");
const hitButton = document.getElementById("hit-button");
const standButton = document.getElementById("stand-button")
const playerCurrentScore = document.getElementById("playerscore");
const dealerCurrentScore = document.getElementById("dealerscore");
const gameTitle = document.getElementById("Title");
// bet buttons
const bet1 = document.getElementById("1-button");
const bet5 = document.getElementById("5-button");
const bet10 = document.getElementById("10-button");
const bet20 = document.getElementById("20-button");
const bet50 = document.getElementById("50-button");
const bet100 = document.getElementById("100-button");


let _canDeal = true;
let _canBet = true;
let _gameOver = false;
let _canHit = false;
let _playerBusted = false;
let _dealerBusted = false;

let playerScore = 0;
let playerBet = 0;
let playerPool =500;
let dealerScore = 0;

let deck = [];
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
let playerCards = [];
let dealerCards = [];

function makeDeck(rank, suit) {
  const card = {
    rank: rank,
    suit: suit,
    pointValue: rank > 10 ? 10 : rank,
  };
  deck.push(card);
};



for (let suit of suits) {
  for (const rank of ranks) {
    makeDeck(rank, suit);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  // Execute after page load
});

dealButton.addEventListener("click", event => dealCards())
hitButton.addEventListener("click", event => hitMe());
standButton.addEventListener("click", event => stand());


function makeBet(){
  if (_canDeal === true){
    if (_canBet === true && playerPool > 0){
      bet1.addEventListener("click", playerBet +=1);
      playerPool-=1;
      console.log(playerBet);
      console.log(playerPool)
    }
  }
 
}
function shuffleDeck(array) {
  var m = array.length, t, i
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

function cleanBeforeRound() {
  dealerHand.innerHTML = "";
  playerHand.innerHTML = "";
  gameTitle.innerHTML = "";
  playerCurrentScore.innerHTML = 0;
  dealerCurrentScore.innerHTML = 0;
  playerScore = 0;
  dealerScore = 0;
  playerCards = [];
  dealerCards = [];
  // deck =[];
  // for (let suit of suits) {
  //   for (const rank of ranks) {
  //     makeDeck(rank, suit);
  //   }
  //   return deck;

  // }
  console.log(deck);
}

function dealCards(event) {

  if (_canDeal === true) {
    cleanBeforeRound();
    console.log(deck);
    newDeck = shuffleDeck(deck);
    for (let i = 0; i < 4; i++) {
      if (i % 2 === 0) {
        let newCard = newDeck.pop();
        let cardImage = document.createElement("img")
        cardImage.setAttribute("src", "/images/" + newCard.rank + "_of_" + newCard.suit + ".png");
        playerHand.appendChild(cardImage);
        playerCards.push(newCard);

      }
      else {
        let newCard = newDeck.pop();
        let cardImage = document.createElement("img")
        cardImage.setAttribute("src", "/images/" + newCard.rank + "_of_" + newCard.suit + ".png");
        dealerHand.appendChild(cardImage);
        dealerCards.push(newCard)
      }
    }
    dealerScore = calculateScore(dealerCards, dealerScore);
    dealerCurrentScore.innerText = dealerScore;
    if (dealerScore > 21) {
      dealerCurrentScore.innerText = "BUST " + dealerScore;
      _dealerBusted = true;
      _gameOver = true;
      endgame();
    }

    playerScore = calculateScore(playerCards, playerScore);
    playerCurrentScore.innerText = playerScore;
    if (playerScore > 21) {
      playerCurrentScore.innerText = "BUST " + playerScore;
      _canHit = false;
      _playerBusted = true;
      _gameOver = true;
      endgame();
    }
    _canHit = true;
    _canDeal = false;
  }



}

function hitMe(event) {
  if (_canHit === true) {
    for (let i = 0; i < 2; i++) {
      if (i % 2 === 0) {
        if (_canHit === true) {
          let newCard = newDeck.pop();
          let cardImage = document.createElement("img")
          cardImage.setAttribute("src", "/images/" + newCard.rank + "_of_" + newCard.suit + ".png");
          playerHand.appendChild(cardImage);
          playerCards.push(newCard);
        }


      }
      else {
        if (dealerScore < 17) {
          let newCard = newDeck.pop();
          console.log(newCard);
          console.log(newDeck);
          let cardImage = document.createElement("img")
          cardImage.setAttribute("src", "/images/" + newCard.rank + "_of_" + newCard.suit + ".png");
          dealerHand.appendChild(cardImage);
          dealerCards.push(newCard)

        }
      }
    }
    dealerScore = calculateScore(dealerCards, dealerScore);
    console.log(dealerScore);
    dealerCurrentScore.innerText = dealerScore;
    if (dealerScore > 21) {
      dealerCurrentScore.innerText = "BUST " + dealerScore;
      _dealerBusted = true;
      _canHit = false;
      _gameOver = true;
      endgame();
    }
    playerScore = calculateScore(playerCards, playerScore);
    console.log(playerScore);
    playerCurrentScore.innerText = playerScore;
    if (playerScore > 21) {
      playerCurrentScore.innerText = "BUST " + playerScore;
      _canHit = false;
      _playerBusted = true;
      _gameOver = true;
      endgame();
    }


  }
}

function checkForAces(handOfCards, score) {
  let numOfAces = 0
  for (let i = 0; i < handOfCards.length; i++) {
    if (numOfAces === 1) {
      score -= 11

    }
  }
}

function calculateScore(array, score) {

  score = 0;
  for (let i = 0; i < array.length; i++) {


    if (array[i].rank === "ace") {

      score += 11;


    }

    else if (array[i].rank === "jack") {
      score += 10;
    }
    else if (array[i].rank === "queen") {
      score += 10;
    }
    else if (array[i].rank === "king") {
      score += 10;
    }
    else {
      score += array[i].rank;
    }

  }
  return score
}

function stand(event) {
  _canHit = false;
  while (dealerScore < 17) {
    let newCard = newDeck.pop();
    console.log(newCard);
    console.log(newDeck);
    let cardImage = document.createElement("img")
    cardImage.setAttribute("src", "/images/" + newCard.rank + "_of_" + newCard.suit + ".png");
    dealerHand.appendChild(cardImage);
    dealerCards.push(newCard)

    dealerScore = calculateScore(dealerCards, dealerScore);
    console.log(dealerScore);
    dealerCurrentScore.innerText = dealerScore;
    if (dealerScore > 21) {
      dealerCurrentScore.innerText = "BUST"
      _dealerBusted = true;

    }

  }
  //_gameOver = true;
  endgame();

}

function finalscoring() {
  
  console.log(dealerScore);
  console.log(playerScore);
  
  if (_dealerBusted === true) {
    // setTimeout(alert("Player Wins!!"), 1);
    gameTitle.innerText = "Player Wins!!"

  }
  else if (_playerBusted === true) {
    // setTimeout(alert("House Wins!!"), 1);
    gameTitle.innerText = "House Wins!!"
  }
  else if (_dealerBusted === true && _playerBusted === true) {
    // setTimeout(alert("House Wins!!"), 1);
    gameTitle.innerText = "House Wins!!"
  }
  else if (dealerScore > playerScore ) {
    // setTimeout(alert("House Wins!!"), 1);
    gameTitle.innerText = "House Wins!!"
  }
  else if (dealerScore < playerScore ) {
    // setTimeout(alert("Player Wins!!"), 1);
    gameTitle.innerText = "Player Wins!!"
  }
  else if (dealerScore == playerScore) {
    // setTimeout(alert("House Wins!!"), 1);
    gameTitle.innerText = "House Wins!!"
  }
}


function endgame() {


  finalscoring();
  _canDeal = true;

  // makeDeck(rank, suit)
  deck = [];
  for (let suit of suits) {
    for (const rank of ranks) {
      makeDeck(rank, suit);
    }
  }
}

