// Get Total Price 

function sumProducts() {

  let coinInput = document.getElementsByClassName("coin-input")
  let sumTotal = 0;
  for(let i = 0 ; i < coinInput.length; i++) {
    let coinInputValues = parseInt(coinInput[i].value)
    debugger
    if(coinInput[i].value == "" && coinInput.length >= 1)  {
      debugger
      let displayMessage = document.createElement("p");
      displayMessage.setAttribute('class', "msg")
      displayMessage.innerHTML = "please fill in the input field"

      document.getElementById("coin-total").appendChild(displayMessage)
    }
    sumTotal += coinInputValues;

    var totalDisplay = sumTotal
    
    document.getElementsByClassName("total-price")[0].innerHTML = totalDisplay;
    debugger

  }
}

