console.log("hi");

var theButton = document.querySelector("header div button:first-of-type");
var theSearchButton = document.querySelector("header div button:nth-of-type(2)");
var theSecondButton = document.querySelector("nav div > button");

theButton.onclick = toggleMenu;
theSearchButton.onclick = toggleMenu;
theSecondButton.onclick = toggleMenuTwo;

function toggleMenu() {  

  var theNav = document.querySelector("nav");

  theNav.classList.toggle("showMenu");
}

function toggleMenuTwo() {  

  var navTwo = document.querySelector("nav");

  navTwo.classList.remove("showMenu");
}



window.onkeydown = handleKeydown;

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("showMenu");
  }
}













var shopButtons = document.querySelectorAll("button.buy");

for (let i = 0; i < shopButtons.length; i++) {
  shopButtons[i].onclick = addToShoppingCart;
}

function addToShoppingCart() {
  /* het getal (de span) in de Shopping-cart-link in de nav opzoeken */
  /* die span in de variabele 'shoppingCartAmount' opslaan */
  let shoppingCartAmount = document.querySelector(".shoppingbag span");

/* het huidige items in de cart bepalen */
  let currentAmount = shoppingCartAmount.innerHTML;
  /* dat is een string - dus even omzetten naar een getal */
  currentAmount = parseInt(currentAmount);
  
  /* het nieuwe aantal parfum in de cart bepalen */
  /* 1 bij het huidige aantal optellen */
  let newAmount = currentAmount + 1;

  /* tenslotte het nieuwe aantal in de HTML zetten */
  shoppingCartAmount.innerHTML = newAmount;
}