//secret secretNumber
var secretnumber=4;
var guess=Number(prompt("Guess a number"));
if(guess == secretnumber){
    alert("You got it right");
}
else{
    if(guess > secretnumber){
        alert("your number is greater")
    }else{
        alert("Too low , Guess again");
    }
}