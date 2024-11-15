var isOriginalColor = true;
function changeColor() {
    var button = document.getElementById("myButton");
    if(isOriginalColor) {
        button.innerHTML = "nottaB a mA I";
    
    button.style.backgroundColor = "black";
    button.style.color = "white";
    isOriginalColor = false;
    } else {button.style.backgroundColor = "white";
        button.innerHTML = "I Am a Button";
        
    button.style.color = "black";
    isOriginalColor = true;
    }

    }
    
var counter = 0;

var incrementButton = document.getElementById("incrementButton");
var decrementButton = document.getElementById("decrementButton");
var counterDisplay = document.getElementById("counter");

function updateCounter() {
    counterDisplay.innerHTML = counter;
}

function incrementCounter() {
    counter++;
    updateCounter();
}
function decrementCounter() {
    counter--;
    updateCounter();
}

incrementButton.addEventListener("click", incrementCounter);
decrementButton.addEventListener("click", decrementCounter);

updateCounter();

var backgroundButton = document.getElementById("backgroundButton");
var backgroundColor = document.getElementById("backgroundColor");
function changeBackgroundColor() {
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;

}