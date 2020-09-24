var todos =[];
var input = prompt("what would you like to do");
while(input !== "quit"){

 if(input === "list"){
     todos.forEach(function(todo,i){
         console.log("*****");
         console.log(i+": " + todo);
         console.log("*******");
     });
     console.log(todos);
 }
 if(input === "new"){
     var newtodo= prompt("enter new todos");
     todos.push(newtodo);
     console.log("added todo");
 }
 if(input==="delete"){
    var index = prompt("enter the index to be deleted");
    todos.splice(index,1);
    console.log("deleted todo")
 }
input = prompt("what would you like to do");
 }