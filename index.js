/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */






function greet(timeString) {
  
    if (parseInt(timeString) < 12) {
       return "Good Morning";
    } 
    else if (parseInt(timeString) >= 12 && (parseInt(timeString) <= 17)){
       return "Good Afternoon";
    } 
    else {
       return "Good Evening";
}    
     
     
}

function displayMessage(timeString) {
  const header = document.getElementById("greeting");
  header.innerText = timeString

   
 }