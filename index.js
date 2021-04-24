/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(_e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(){

  const inPutTime = document.getElementById("time").value

  let myTime = inPutTime.split(':')
  let intHour=parseInt(myTime[0])
  let intMin=parseInt(myTime[1])

  
    if (intHour<12 &&  intMin<=60 && intMin>=0){
      return messege="Good Morning"
    }
    else if (intHour>=12 && intHour<=17 && intMin<=60 && intMin>=0){
      return messege ="Good Afternoon";
    }
    else if (intHour>17 && intHour<=24 && intMin<=60 && intMin>=0){
      return messege="Good Evening";
    }
  }
  
/* Write your implementation of displayMessage() */

function displayMessage(_message){
  document.getElementById("greeting").innerText = messege;
}