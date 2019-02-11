//javascript to set up functions...
var clicks = 0;
function onClick()
{
    clicks+=1;
    document.getElementById("clicks").innerHTML=clicks;
}













var player1Clicks = "";
var player2Clicks = "";
var count ="";
var player = document.getElementById("player");
var resetButton = document.querySelector("button");

var tieChecker = "";

//function to count clicks...
function clickCounter()
{
    numberOfClicks = count;

        if(player1Clicks > player2Clicks)
        {
            alert("player one wins");
        }
        else if(player1Clicks === player2Clicks)
        {
            alert("no winner");
        }
        else
        {
            alert("player two wins");
        }

}



//Function to change color to red when button is clicked...
function changeColorRed() {
    var elem = document.getElementById('red');
    elem.style.color = "red";
}

console.log(document.getElementById("red"));
document.getElementById("red").onclick=changeColorRed;

//function to change color to yello when button is clicked...
function changeColorYellow(yellow) {
    var elem = document.getElementById('yellow');
    elem.style.color = "yellow";
}
document.getElementById("yellow").onclick=changeColorYellow;

//function to change color to blue when button is clicked...
function changeColorBlue(blue) {
    var elem = document.getElementById('blue');
    elem.style.color =('blue');

}

document.getElementById('blue').onclick=changeColorBlue;