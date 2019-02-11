var currentPlayer = 1;
var count ="";
var player = document.getElementById("player");
var resetButton = document.querySelector("button");


var player1Clicks = 0;
var player2Clicks = 0;
var tieChecker = 0;

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




function changeColorRed(red) {
    var elem = document.getElementById('red');
    elem.style.color = red;
}
document.getElementById(red).onclick(changeColorRed());


function changeColorYellow(yellow) {
    var elem = document.getElementById('yellow');
    elem.style.color = yellow;
}
document.getElementById("yellow").onclick(changeColorYellow());


function changeColorBlue(blue) {
    var elem = document.getElementById('blue"');
    elem.style.color =('blue');

}

document.getElementById('blue').onclick(changeColorBlue());