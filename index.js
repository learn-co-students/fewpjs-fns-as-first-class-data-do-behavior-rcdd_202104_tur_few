/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(str) {
  let split = str.split(":");
  let int = parseInt(split[0]);
  if(int < 12){
    return "Good Morning";
  }
  else if (int > 12 && int < 17) {
    return "Good Afternoon";
  }
  else {
    return "Good Evening"
  }
}

/* Write your implementation of greet() */

function displayMessage (str) {
  let node = document.getElementById("greeting");
  node.innerText = str;
}
/* Write your implementation of displayMessage() */
