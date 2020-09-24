console.log("printing all number between -10 and 19");
var count = -10;
while(count<=20){
    console.log(count);
    count++;
}
count = 10;
while(count<=40){
    if(count%2 === 0){
        console.log(count);
    }
    count++;
}
count = 301;
while(count < 333){
    console.log(count);
    count = count+2;
}
count = 5;
while(count<50){
    if(count%5 === 0){
        if(count%3 === 0){
            console.log(count);
        }
    }
    count++;
}