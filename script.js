document.getElementById("card-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  let cardNumber = document.getElementById("card-number").value.replace(/\D/g, ""); // Remove non-numeric characters
  let resultMessage = document.getElementById("result-message");

  if (luhnCheck(cardNumber)) {
      resultMessage.textContent = "✅ Valid Credit Card Number!";
      resultMessage.className = "valid";
  } else {
      resultMessage.textContent = "❌ Invalid Credit Card Number!";
      resultMessage.className = "invalid";
  }
});

// Luhn Algorithm to check validity
function luhnCheck(cardNumber) {
  let sum = 0;
  let shouldDouble = false;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber[i]);

      if (shouldDouble) {
          digit *= 2;
          if (digit > 9) digit -= 9;
      }

      sum += digit;
      shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}