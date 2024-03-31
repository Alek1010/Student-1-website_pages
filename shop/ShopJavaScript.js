


var basketItems = []; // Object to store basket items and their quantities

function renderBasket() { // allow me to call render basket from any point in the program
  let selectList = document.getElementById("basket");

  selectList.innerHTML = "";

  basketItems.forEach((item) => {
    let option = document.createElement("option");// creates an option tag for which is placed in the select tag in the code
    option.value = item.description;
    option.text = `${item.description} - x${item.quantity}`;
    selectList.appendChild(option);
  });
  
}
//seperate function to calculare total price of the items added to the basket 
function calculateTotalPrice(price) { // allows me to recalculare the price from any point in the program
  var totalAmount = 0;
  
  basketItems.forEach(item => {
    totalAmount += item.price * item.quantity;

  });
  var totalAmountElement = document.getElementById("totalAmount");
  totalAmountElement.innerText = "£"+totalAmount.toFixed(2); // Update the displayed total price
  console.log(totalAmount)
  }

//checks if items are already in the cart if so increments the qunatity 
function addToCart(description, price) {
  price = parseFloat(price);
  
  var item = { description, price, quantity: 1 };
  

  console.table(basketItems);

  if (
    basketItems.filter((item) => item.description == description).length == 1
  ) {
    basketItems.find((i) => i.description == description).quantity++;
  } else {
    basketItems.push(item);
  }

  renderBasket();// re rendered basket to most current 

  console.table(basketItems);
  calculateTotalPrice(price);// re calculates the price 
 // this function is called every time a priduct is clicked 
}



//check out checks if item in basket if so moves to checkout
document.querySelector("#checkoutBtn").addEventListener("click", () => {
  if(basketItems.length===0){
    alert("you need to have items in the basket") // checks if basket is empty 
  }else{
    
    //this is the local storage for the final amount when the button gets clicked 
    var finalTotal = 0;
    basketItems.forEach(item=>{
      finalTotal= finalTotal+item.price*item.quantity;
    });
    localStorage.setItem("totalamount",finalTotal.toFixed(2));// adds the final bakset and price to local strorage
    localStorage.setItem("basket", JSON.stringify(basketItems));
    console.log("click");
    window.location.replace("./W1965221_student1_shop_checkoutPage.html");// opens checkout page 
  }
  
});



// the remove button on the page 
document.getElementById('clearItem').addEventListener('click', function(price){
  var selectElement = document.getElementById('basket');// gets the selected item
  var selectedIndex = selectElement.selectedIndex; // finds its index 

  
  var selectedOption = selectElement.options[selectedIndex];
  var selectedDescription = selectedOption ? selectedOption.text : null;

  var index = basketItems.indexOf(selectedDescription) // gets the index of the item in the array

  console.log(selectedDescription)
  console.log(basketItems);

  basketItems.splice(index,1)
  selectElement.remove(selectedIndex);// first removes it from the array then from the screen 

  renderBasket();// updates basket 
  calculateTotalPrice(price);// re calculates and updates the price 
  

  

  

});

// Add event listeners to product items for hover effect and click functionality
var products = document.querySelectorAll(".product");
products.forEach(function (product) {
  product.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.1)"; // Increase size on hover
    this.style.cursor = "pointer"; // Change cursor to pointer
  });

  product.addEventListener("mouseout", function () {
    this.style.transform = "scale(1)"; // Reset size on mouseout
  });

  product.addEventListener("click", function () {
    console.log("product clicked")
    console.log("this",this)

    
    
      // Trigger addToCart function when clicked
    var description = this.querySelector(".description").textContent.trim();
    var price = parseFloat(
      this.querySelector(".price").textContent.replace("£", "")
    );
    addToCart(description, price);
  
    

    
  });
});


// clear basket button
document
  .getElementById("clearBasketBtn")
  .addEventListener("click", function () {
    // Clear the contents of the basket
    var selectList = document.getElementById("basket");
    selectList.innerHTML = "";

    // Reset the total amount to zero
    totalAmount = 0;

    // Clear the basket items object
    basketItems = [];

    // Update the total amount displayed
    var totalAmountElement = document.getElementById("totalAmount");
    totalAmountElement.innerText =   "£"+totalAmount.toFixed(2);
  });

