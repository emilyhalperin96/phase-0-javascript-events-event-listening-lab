
// use same alert message on multiple elements 
//create a separate function that could by called by all event listeners 
//pass the function name as the second argument to addEventListener

function addingEventListener() {
  const input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);
}