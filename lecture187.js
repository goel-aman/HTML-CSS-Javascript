var button = document.querySelector("button");
var ispurple= false;

// button.addEventListener("click",function(){
//     if(ispurple){
//    document.body.style.background="white"; 
//    ispurple= false;
//     } else{
//         document.body.style.background="purple";
//         ispurple= true;
//     }
button.addEventListener("click",function(){
    document.body.classList.toggle("purple");
});