//datatype//
//string number boolean//
console.log("coimbatore is raining");
console.log("27")
console.log(10<9);
//arithmetic operator//
let a=20;
let b=25;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(++a);
console.log(--b);
//assignment operators//
//+=,-=,*=,/=//
console.log(a+=b);
//comparsion operator//

//==,===,!=,!===,<,>,<=,>=,?//
let c=50;
let d=40;
console.log(c==d);
console.log(c===d);
console.log(c!=d);
console.log(c<d);
console.log(c>d);
console.log(c<=d);
console.log(c>=d);


//logical operators//
//and or not//
let r=true;
let s=false;
let logical=r&&s;
console.log(!logical);
console.log(logical);
//block scope//
{
    var user="kitkat"
}
console.log("user");

//fn declaration//
function data() {
    console.log("data");
}
data();

//fn expression//
let dept=function () {
    console.log("dept");
    
}
dept();
//arrow function//
var age=()=>{
    console.log("age");
}
age();


//if,else if, else//

function time() {
    if(time<24){
        console.log("great evening");
    }    

 else if(time>=24){
    console.log("good day");
 }
 else{
    console.log("monday");
 }

}
time();

function hour() {
    if(hour<18){
        console.log("great day");
    }
    else{
        console.log("good evening");
    }   
}
hour();
    //switch///
 
    var day=1;
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");    
            break;

         case 3:
            console.log("Wednesday");   
            break;

         case 4:
            console.log("Thrusday");  
            break;
         case 5:    
                console.log("Friday");
            break;
         case 6:
            console.log("saturday");
            
    }