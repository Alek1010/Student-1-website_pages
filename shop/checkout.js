
//random number generator for refernence 
document.addEventListener('DOMContentLoaded', function () {
    const referenceElement = document.getElementById('Reference');
    
    // Function to generate a random reference number
    function generateRandomReference() {
      return Math.floor(Math.random() * 1000000);
    }
    
    // Set a random reference number when the page loads
    referenceElement.innerHTML = generateRandomReference();
    
    // Rest of your code (including form validation and submission) goes here
  });


  

  // opens local storage to access the items you had in your basket 
  var basketItems = JSON.parse(localStorage.getItem("basket"));

 //takes items in local storage and displays them onto check out screen
  basketItems.forEach(function(item){
  var option = document.createElement("option");
  option.textContent = item.description+"-x" +item.quantity;
  option.value=item.description;
  document.getElementById("basket").appendChild(option);
});

var price_toPay = JSON.parse(localStorage.getItem("totalamount"));
document.getElementById("total_amount").textContent = "£"+price_toPay;
  
  


  

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const payButton = document.getElementById('pay');
    
    // Function to validate inputs
    function validateInputs() {
      const cardNumInput = document.querySelector('.cardNum');
      const nameInput = document.querySelector('input[name="name"]');
      const expirationInput = document.querySelector('input[name="expiration"]');
      const ccvInput = document.querySelector('input[name="CCV"]');
      const addressInputs = document.querySelectorAll('input[name="address"]');
      const townInput = document.querySelector('input[name="town"]');
      const countyInput = document.querySelector('input[name="county"]');
      const postcodeInput = document.querySelector('input[name="postcode"]');
      const countryInput = document.getElementById('country');
      const firstNameInput = document.querySelector('input[name="firstName"]');
      const surenameInput = document.querySelector('input[name="Surename"]');
      const emailInput = document.querySelector('input[name="email"]');
      const phoneInput = document.querySelector('input[name="Phonenumber"]');
      
      // Check if all inputs are filled and valid
      if (
        cardNumInput.validity.valid &&
        nameInput.validity.valid &&
        expirationInput.validity.valid &&
        ccvInput.validity.valid &&
        addressInputs[0].validity.valid &&
        townInput.validity.valid &&
        countyInput.validity.valid &&
        postcodeInput.validity.valid &&
        countryInput.value !== 'select a country' &&
        firstNameInput.validity.valid &&
        surenameInput.validity.valid &&
        emailInput.validity.valid &&
        phoneInput.validity.valid
      ) {
        return true;
      } else {
        return false;
      }
    }
    
    // Function to handle form submission
    function handleSubmit(event) {
      window.location="w1965221_student1_shop.html";
      window.location.reload();
      
      // Validate inputs
      if (validateInputs()) {
        // Generate reference number (can be random or based on current date/time)
        const referenceNumber = Math.floor(Math.random() * 1000000);
        
        // Display order summary
        const orderDescription = document.getElementById('orderDescription');
        orderDescription.innerHTML = "Order items: [Your order details here]";
        
        // Calculate and display total amount (if applicable)
        const totalAmount = document.getElementById('total_amount');
        totalAmount.innerHTML = "[Total amount]";
        
        // Display reference number
        const reference = document.getElementById('Reference');
        reference.innerHTML = referenceNumber;
        
        // Show confirmation message
        alert("Your order has been placed successfully! Reference number: " + referenceNumber);
        
        // Redirect to a different page after confirmation (change the URL accordingly)
        window.location.href = "thankyou.html";
      } else {
        // If inputs are not valid, show error message
        alert("Please fill in all required fields correctly.");
      }
    }
    
    // Event listener for form submission
    payButton.addEventListener('click', handleSubmit);
  });
  
