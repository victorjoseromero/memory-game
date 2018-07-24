 //* Create a list that holds all of your cards  */
 
 const symbols = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb",
 "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb"];

const cardsContainer = document.querySelector(".deck");
let openedCards = [];
let matchedCards = [];

  
 //* Display the cards on the page
 //*   - shuffle the list of cards using the provided "shuffle" method below
 
 // Shuffle function from http://stackoverflow.com/a/2450976
 
 function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

array = shuffle(symbols);

 //*   - loop through each card and create its HTML
 
  function initialize(){
	 for (let i = 0; i < symbols.length; i++){

	 //* - add each card's HTML to the page

	 const card = document.createElement("li");
	 card.classList.add("card");	 
	 cardsContainer.appendChild(card);
	 card.innerHTML=`<i class="${symbols[i]}"></i>`  //template literal	 
 	 
	 click(card);

  }
  }
	 
 //* set up the event listener for a card. If a card is clicked:
 
function click(card) {	

	 card.addEventListener("click", function(){
		 
// *  - display the card's symbol (put this functionality in another function that you call from this one)

// *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)

		const currentCard = this;
		const previousCard = openedCards[0];
		 
	if(openedCards.length === 1){
		
			card.classList.add("open", "show", "disabled");
			openedCards.push(this);
		
//*  - if the list already has another card, check to see if the two cards match
		
			compare(currentCard, previousCard);
			
		}else{  
		 currentCard.classList.add("open", "show", "disabled");
		 openedCards.push(this);
		}		
	 }); 
	 }

function compare(currentCard, previousCard){
	 
//+ if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
	 
			if(currentCard.innerHTML === previousCard.innerHTML){
							
				currentCard.classList.add("match");
				previousCard.classList.add("match");
				
				matchedCards.push(currentCard, previousCard);
				
				openedCards=[];
				
				gameOver();

//* + if the cards do not match, remove the cards from the list and hide the card's symbol (
//put this functionality in another function that you call from this one)

				
			}else{
				
				openedCards=[];
			
			setTimeout(function(){
				currentCard.classList.remove("open", "show", "disabled");
				previousCard.classList.remove("open", "show", "disabled");
			}, 500);
			}
	
addMove();	
 }
 
//* + increment the move counter and display it on the page (put this functionality in another function that you call from this one)


const movesContainer = document.querySelector(".moves");
let moves = 0;
movesContainer.innerHTML=0;
 function addMove(){
	 moves++;
	 movesContainer.innerHTML = moves;
	 
	 rating();
 }
    
 // + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 
 const starsContainer=document.querySelector(".stars");
 function rating(){
	 switch(moves){
		 case 1: 
		 starsContainer.innerHTML=`<li><i class="fa fa-star"></i></li>`;
		 break;
		 
		 case 2: 
		 starsContainer.innerHTML=`<li><i class="fa fa-star"></i></li>
		 <li><i class="fa fa-star"></i></li>`;
		 break;
		 
		 case 3: 
		 starsContainer.innerHTML=`<li><i class="fa fa-star"></i></li>
		 <li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>`
	 }
	 
 }
 
 function gameOver(){
	 if(matchedCards.length===symbols.length){
		 alert("Game Over!");
		 
	 }
 }
 
 const restartBtn = document.querySelector(".restart")
 restartBtn.addEventListener("click", function(){
	cardsContainer.innerHTML = "";

initialize();	
	 
	 matchedCards=[];
	 moves=0;
	 movesContainer.innerHTML=moves;
 });
 
initialize();

 
 
