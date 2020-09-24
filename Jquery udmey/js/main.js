// // var myFirstName = 'Ron';

// // console.log(myFirstName) 

// $(document).ready(function () {

//     var element = $(".hello");
//     console.log(element);


// });


// $(function(){
//     var element = $(".hello");
//     console.log(element);
// })


// $(function(){


// $("ul,p,form").css("fontSize","30px");

// });


// $(function(){
//     $(".text,#list").css("fontSize","30px");
//     $("input:text").css("background","orange");
//     $("input:radio").css("margin","30px");
//     $("input:checked").css("margin","30px");

// })


// $(function(){
// $("li:first").css("background","blue");
// $("li:odd").css("background","orange");
// $("li:even").css("background","pink");
// $("li:last").css("border","1px solid black");

// });

// $(function(){

// $(".aman li:first-child").css("background","pink");

// });

// $(function(){
//     $(".aman li:first-of-type").css("background","lightblue");
//     $(".aman li:last-of-type").css("background","orange");
//     $(".aman li:last-child").css("background","green");
//     $(".aman li:nth-child(2)").css("border","2px solid black");
// })


//$(function () {

// $(".parent").find("div").css("background",'red');
//$(".parent div").css("background","blue");
// $('.parent').find(".title").css("background","blue");
//$(".parent").find("#other").css("fontSize","20px");
// $(".parent").children("#other").css("color","pink");
//});


// $(function(){
//     $(".user").parent().css("background","lightblue");
// });

// $(function(){
//     // $(".hobbies").parents(".parent").css("background","blue");
//     $(".hobbies").parents().css("background","pink");
// })

// $(function(){
// var xw = $(".hobbies").parent();

// xw.css("background","green");
// });

// $(function(){

//     $("#two").prev().css("background","orange");
//     $("#two").next().css("background","blue");

// });



//  new topic ===================================================================
// $(function(){
//     $('.list li:eq(0)').css("background","grey");
//     $('.list li:eq(1)').css("background","blue");
//     $(".list li:eq(2)").css("background","orange");
// });


// $(function(){
// $(".list").parents().eq(0).css("background","orange");
// $(".list").parents().eq(1).css("background","orange");
// });

// new topic === first,last,filter and Not ===============================================
//$(function(){
// $("div:first").css("background","lightblue");
// $("div").first().css("background","red");
// $("div").last().css("background","orange");

// $("div").filter(".different").css("background","pink");
// $("div").not(".different,.something").css("background","pink");

//});

// next topic ====append , prepend , after and before=======================================

//$(function(){
// var parent = document.querySelector(".parent");

// var newElement = document.createElement("div");

// newElement.className="newDiv";
// newElement.innerText = "hi i am div";

// parent.appendChild(newElement);


// $('.parent').append('<div class="mydiv">My new div</div>');


// $('.parent').prepend("<div class='hello'>hello</div>");

// $('.parent').before('<div> BEfore aldfa<div>');
// $('.parent').after("<div class='he'>alfjdslfj</div>");

// $('input').after("<div>error</div>");
//});


// next topic ==== Replacing And Removing  ==================================================

//$(function(){
// $('.replaceme').replaceWith("<div>I am Replaced</div>");

//  $('<div>Not Available</div>').replaceAll('.replaceme,.replaceagain');
// $("").replaceAll('.replaceme,.replaceagain');

// $('.removeMe').remove();

// $("ul li:odd").remove();
// $("ul li:eq(2)").remove();

// $('ul').remove();
// $('ul').empty();

// $('ul').html('');

//});

// next topic ==== Accessing Element Data ======================================================

//$(function(){

// console.log($('a').text());
// console.log($('a').text("Some other click"));
// console.log($('a').attr("href"));
// console.log($('a').attr("style"));
// console.log($('a').attr("style","color:orange"));
// $('a').attr("style","color:pink");
// $('a').attr("href","www.udemy.com");
// $('a').attr("aman","bye");
//    console.log($('input').attr("value")) ;
// console.log($('input').val());
// console.log($('input').prop("checked"));
//console.log($('input').prop("checked",true));



//});

// next topic ===== Working With Classes =======================================================j

//$(function(){

// var classes = $('.element').attr('class');
// console.log(classes);

// console.log($('.element').hasClass("anotherClass"));

// if($('.element').hasClass("active")){
// $('.element').before("<div>Move Forward</div>");
// }else{
// $('.element').append("<div>go backward</div>");
// }

// $('.element').addClass("bottom");
// $('.element').removeClass("active");
//$('.element').removeClass('active').addClass('notActive');
// $('.element').toggleClass("active notactive");


//});




// next topic ==== Working With Styles ==============================================================

//$(function(){
// var element = $('.element');
// console.log(element.css("fontSize"));
// console.log(element.css("width"));


// console.log(element.width());
// console.log(element.height());

// element.css("background","red");
// element.css("color","blue");


// element.css("width","+=50px");
// console.log(element.width());

// element.css({
//     "background":"pink",
//     "color":"blue"
// });

//});

// next topic ==== Data Attribute ====================================================================
// $(function(){
// console.log($('.element').attr("hobbies"));
// console.log($('.element').attr("name"));

//     console.log($('.element').data("name"));
//     console.log($('.element').data("hobbies"));
//     console.log($('.element').data("hobbies").split(','));


//     console.log($('.element').data());

//     var data = $('.element').data();

//     console.log(data.hobbies);

// var cars = ["ford","chevy","honda"];
// $('.element').data("cars",cars);

// console.log($('.element').data());


// });


// new topic ========Events in javascript =============================================================

//$(function(){
// var element = document.querySelector('.element');

// element.addEventListener("click",function(e){
//     console.log("Someone clicked me");
// })

// $('.element').click(function(){
//     console.log("Someone Clicked Me");
// })

// $('.element').on("click mouseover mouseleave",function(){
//     console.log("someone clicked me");
// });

// $(document).on("click mouseover mouseleave",".element",function(e){
//     console.log("Someone clicked Me");
// })


//});

// new topic =======Mouse Events in Jquery ==============================================================


// $(function(){
//     $('.element').mouseenter(function(){
//         console.log("mouse enter");
//     });

//     $('.element').mouseleave(function(){
//         console.log("mouse Leave");
//     });
// });


// $(function () {
//     $('.element').hover(function () {
//         console.log("mouse enter");
//     },
//         function () {
//             console.log("mouse Leave");
//         });
// })

// $(function(){
//     $('.element').mousedown(function(){
//         console.log("you pressed mouse down");
//     });
// });

// $(function(){


//     $('.element').mouseup(function(){
//         console.log("mouse up");
//     });
// });

// $(function(){
//     $('.element').mousemove(function(){
//         console.log("YOu are moving the mouse");
//     });
// });

// $(function(){
//     $('.element').click(function(event){
//         var pageCoords = "(" + event.pageX + " , " + event.pageY + ")" ;
//         console.log("coords: " + pageCoords);

//         console.log(event);
//         });

// });


// new topic Keyboard Events =================================================================================

// $(document).ready(function(){
//     $(document).keydown(function(event){
//         console.log("key pressed");
//         console.log(event.which);
//     })
// })

//$(document).ready(function () {

    // $(document).keydown(function (event) {
    //     var down = 40;
    //     var left = 39;

    //     if (event.which === down) {
    //         $('.element').css({ top: "+=10px" })
    //     }
    //     if (event.which === left) {
    //         $('.element').css({ left: "+=10px" })
    //     }

    // })

    // $(document).keyup(function (event) {
    //     console.log(event.which);
    // })

//});


// new topic Other Events in Jquery and javascript =============================================================

// $(function(){
//     $(document).scroll(function(){
//         console.log("scrolling");
//     })
// })


// $(window).resize(function(){
//     console.log("resize");
// })


// $(function(){
//     $('.element').append("<div class='block'>My div</div>");

//     $('.block').click(function(){
//         console.log("Clicked");
//     });




//     $(document).on("click",".block",function(){
//         console.log("clicked");
//     });

//     //// user do
//     $('.element').append('<div class="block">My div </div>');
// });






// new topic form Events ========================================================================================



















