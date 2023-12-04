const form = document.querySelector(".form");
const front = document.querySelector("#front");
const back = document.querySelector("#back");
const cardContainer = document.querySelector(".main");
const warning = document.querySelector(".warning");
const cardNumber = document.querySelector(".card-number");
const clearBtn = document.querySelector("#clear");
let cards = [];

function addCard(e) {
   e.preventDefault();
   if (front.value == "" || back.value == "") {
      warning.textContent = "Both inputs need to be filled.";
      return;
   }
   warning.textContent = "";
   const cardObject = {frontSide: front.value, backSide: back.value};
   cards.push(cardObject);
   createCard();
}

function createCard() {
      const card = cards[cards.length - 1];
      const cardElement = document.createElement("div");
      cardElement.classList.add("card")
      cardElement.addEventListener("click", flipCard);
      
      const frontEl = document.createElement("p");
      const backEl = document.createElement("p");
      frontEl.textContent = card.frontSide;
      frontEl.classList.add("card-front");
      backEl.textContent = card.backSide;
      backEl.classList.add("card-back");

      cardElement.appendChild(frontEl);
      cardElement.appendChild(backEl);
      cardContainer.appendChild(cardElement);
      cardNumber.textContent = cards.length ;
      front.value = "";
      back.value = "";

}

function flipCard({target}) {
   target.classList.toggle("flipped");
}

function clearAll() {
   cards = [];
   while (cardContainer.firstChild) {
      cardContainer.removeChild(cardContainer.firstChild);
   }
   cardNumber.textContent = 0;
}

form.addEventListener("submit", addCard);
clearBtn.addEventListener("click", clearAll);