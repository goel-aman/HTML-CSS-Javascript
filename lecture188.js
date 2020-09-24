var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var p3button = document.querySelector("#reset");
var numinput = document.querySelector("input"); 
var playingto = document.getElementById("playing");
var p1score= 0;
var p2score= 0;
var gameover = false;
var winningscore = 5;

 


p1button.addEventListener("click",function(){ 
     if(!gameover){
p1score++;
if(p1score === winningscore){
gameover = true;
p1display.classList.add("winner");
}
     p1display.textContent = p1score;
     }
});

p2button.addEventListener("click",function(){
    if(!gameover){
    p2score++;
    if(p2score === winningscore){
    gameover = true;
    p2display.classList.add("winner");
    }
    p2display.textContent = p2score;
}
});

p3button.addEventListener("click",function(){
    p1score = 0;
    p2score = 0;
    p1display.textContent = p1score;
    p2display.textContent = p2score;
    gameover = false;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
});

numinput.addEventListener("change",function(){
    playingto.textContent = Number(numinput.value);
    winningscore =Number(numinput.value);
    p1score = 0;
    p2score = 0;
    p1display.textContent = p1score;
    p2display.textContent = p2score;
    gameover = false;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
   });