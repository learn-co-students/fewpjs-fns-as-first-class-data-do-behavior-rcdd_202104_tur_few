/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

let button = document.querySelector("button");
let input = document.querySelector("input#time");
let h1 = document.querySelector("h1#greeting");

function greet(timeString) {
  // let timeString = input.value;
  let timeString1 = timeString.split();
  let timeNumber = parseInt(timeString1);
  console.log(timeNumber);

  if (timeNumber <= 12) {
  return "Good Morning";
} else if (timeNumber > 12 && timeNumber <= 17) {
  return "Good Afternoon";
} else {
  return "Good Evening";
}
}

function displayMessage(str){
  h1.innerText = str;
}



/* Write your implementation of displayMessage() */


