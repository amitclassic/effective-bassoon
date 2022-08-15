// random value generated
  var y = Math.floor(Math.random() * 20 + 1);
  var guess = 1;



// counting the number of guesses
// made for correct Guess

var playername = document.getElementById("playername").value;
// function for number guessed by user 

function submit()
{


console.log(playername)
var x = document.getElementById("guessField").value;
console.log(x);
console.log(y);
if (x == y)
{
    alert("CONGRATSUIEPUFE " + playername + ", YOU GUESSED DA EPIK NUMBER IN " + guess + " TRIESSSGWIUFOUHOI!!!!!");
    guess = 1;
}
else if(x > y)
{
    guess++;
    alert("OooHH gAWDd HAlLPPP!!1!1 SsMallerrrrRrrRRr NumbAAAAaaa");
}
else (x < y)
{
    guess++;
    alert("OooHH gAWDd HAlLPPP!!1!1 bBIiGGeERrrRrrRrR nUmbAAaAaAa");
}
}
function playAgain()
{
    y = Math.floor(Math.random() * 20 + 1);
}

