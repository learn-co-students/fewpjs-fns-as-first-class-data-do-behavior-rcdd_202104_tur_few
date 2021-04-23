/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet (time24){
  let givenTime = time24.split(":");
  let hours = parseInt(givenTime[0]);
  if (hours < 12){
    return "Good Morning";
  }
  else if (hours > 17){
    return "Good Evening";
  }
  else {
    return "Good Afternoon";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage (timeString){
  document.getElementById("greeting").innerText = timeString;
}
