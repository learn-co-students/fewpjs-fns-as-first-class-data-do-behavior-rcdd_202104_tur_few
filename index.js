/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  let timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  timeString = timeString.split(":");
let otherTime = timeString[0].concat(timeString[1])
let result = parseInt(otherTime,10)
if ( result < 1200 ){
  return "Good Morning";
}
else if (result > 1700){
  return "Good Evening";
}
else {
  return "Good Afternoon";
}
}
/* Write your implementation of displayMessage() */

function  displayMessage(x){

  document.getElementById("greeting").innerText= x;

  function greet(timeString){
  timeString = timeString.split(":");
let otherTime = timeString[0].concat(timeString[1])
let result = parseInt(otherTime,10)
if ( result < 1200 ){
  return "Good Morning";
}
else if (result > 1700){
  return "Good Evening";
}
else {
  return "Good Afternoon";
}
}
/* Write your implementation of displayMessage() */

function  displayMessage(x){

  let m =   document.getElementById("greeting").innerHTML = x;

  



}



}