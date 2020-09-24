var firstli = document.querySelectorAll("li");

var i;
for(i=0;i<firstli.length;i++){
firstli[i].addEventListener("mouseover",function(){
this.classList.add("selected");
});
firstli[i].addEventListener("mouseout",function(){
    this.classList.remove("selected");
});

firstli[i].addEventListener("click",function(){
    this.classList.toggle("done");
});
}
