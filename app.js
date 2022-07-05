const submitButton = document.getElementById("submit");
console.log(submitButton);

const message = document.getElementById("message");
const lives =document.getElementById("lives");

var randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);
var text;
var live = 10;


submitButton.onclick = () =>{
var inputValue = document.getElementById("input-number").value;
console.log(inputValue);
live--;

// winning condition
if(inputValue == randomNumber){
    location.href = "./win.html";
}

// losing condition
else if(live == 0){
    location.href = "./lose.html";
}

// when inputValue is greater
else if(inputValue > randomNumber){
    text = `oops! Your guess is high. You have ${live} lives remaining.`;
}

// when iput value is lesser
else if(inputValue < randomNumber){
    text = `oops! Your guess is low.You have ${live} lives remaining.`;
}
message.style.display = "inherit";
message.innerHTML = text;
lives.innerHTML = live;
// console.log(lives);
// console.log(text);
}