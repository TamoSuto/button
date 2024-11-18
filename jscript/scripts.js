var isOriginalColor = true;
var text = document.getElementById('textBlock');
var isOriginalVantage = true;
var backgroundButton = document.getElementById("backgroundButton");
var backgroundColor = document.getElementById("backgroundColor");
var counter = 0;
var incrementButton = document.getElementById("incrementButton");
var decrementButton = document.getElementById("decrementButton");
var counterDisplay = document.getElementById("counter");
var isHidden = true;
var p = document.getElementById("paragraph")


function changeColor() {
    var button = document.getElementById("myButton");
    if(isOriginalColor) {
        button.innerHTML = "nottaB a mA I";
    
    button.style.backgroundColor = "black";
    button.style.color = "white";


    isOriginalColor = false;
    } else {
        
        button.style.backgroundColor = "white";
        button.innerHTML = "I Am a Button";
        
    button.style.color = "black";
    isOriginalColor = true;
    }

    }
    
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

function changeBackgroundColor() {
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;

}

function changeTextColor() {
    if(isOriginalVantage) {
        text.innerHTML ="I Love This"
    
        document.getElementById('mainContent').style.background = backgroundColor="black";
        document.getElementById('mainContent').style.color = color="white";

    isOriginalVantage = false;
    } else {
        document.getElementById('mainContent').style.background = backgroundColor="red";
        document.getElementById('mainContent').style.color = color="black";
        
    text.innerHTML ="Hobbyer"
    isOriginalVantage = true;
    }

    }
    function hideFunction() {
        if(isHidden) {
            document.getElementById('paragraph').style.visibility="visible"
            isHidden = false;
        } else {
            document.getElementById('paragraph').style.visibility="hidden"
            isHidden = true;
        }
     
    }