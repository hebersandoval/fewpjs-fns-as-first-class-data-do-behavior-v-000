/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  if (timeString < 12) {
    return 'Good Morning';
  } else if (timeString > 12 & timeString < 5) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
}
/* Write your implementation of displayMessage() */
