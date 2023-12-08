const form = document.querySelector(".form");
const front = document.querySelector("#front");
const back = document.querySelector("#back");
const cardContainer = document.querySelector(".main");
const warning = document.querySelector(".warning");
const cardNumber = document.querySelector(".card-number");
const clearBtn = document.querySelector("#clear");
let cards = [];
let id = 1;

function addCard(e) {
   e.preventDefault();
   if (front.value == "" || back.value == "") {
      warning.textContent = "Both inputs need to be filled.";
      return;
   }
   warning.textContent = "";
   const cardObject = {id: id, frontSide: front.value, backSide: back.value};
   cards.push(cardObject);
   id = id + 1;
   createCard(cards);
}
function createCard(cardArray) {
      const card = cardArray[cardArray.length - 1];
      const cardElement = document.createElement("div");
      cardElement.classList.add("card")
      cardElement.addEventListener("click", flipCard);
      
      const frontEl = document.createElement("p");
      const backEl = document.createElement("p");
      const removeIcon = document.createElement("img");

      frontEl.textContent = card.frontSide;
      frontEl.classList.add("card-front");
      backEl.textContent = card.backSide;
      backEl.classList.add("card-back");
      removeIcon.setAttribute("src", "./images/delete-icon.png");
      removeIcon.classList.add("card-front");
      removeIcon.classList.add("remove-icon");
      removeIcon.addEventListener("click", () => {removeCard(cardElement, card.id)});

      cardElement.appendChild(frontEl);
      cardElement.appendChild(backEl);
      cardElement.appendChild(removeIcon);
      cardContainer.appendChild(cardElement);
      cardNumber.textContent = cardArray.length ;
      front.value = "";
      back.value = "";

}

function removeCard(cardElement, id) {
  cardContainer.removeChild(cardElement);
  cards = cards.filter(card => card.id !== id);
  cardNumber.textContent = cards.length;
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