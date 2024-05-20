// data types//
//string//
//number//
//boolean//
console.log("coimbatore under red alert due to heavy rain for 3 days");
console.log(5);
console.log(10<9);


//arithmetic operators//
//+,-,*,/,%,++,--
let a=5;
let b=5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(++a);
console.log(--a);

//assignment operators//
//+=,-=,*=,/=//
console.log(a+=b);
//comparsion//
//==,===,!=,!===,<,>,<=,>=,?

let c=24;
d=24;
console.log(c==d);
console.log(c===d);
console.log(c!=d);
console.log(c>d);
console.log(c<d);
console.log(c<=d);
console.log(c>=d);
//logical operators
//and,or ,not
let x=true;
let y=false;
let logic=x&&y;
console.log(!logic);
console.log(logic);

let magic=x||y;
console.log(x||y);
console.log(!magic);
console.log(magic);

let real=x??y;
console.log(x??y);
console.log(!magic);
console.log(magic);

//block scope//
{
    let admin="red alert heavy rain"
}
console.log("admin");


//fn declaration//
function data() {
    console.log("data");
}
data();
//fn expression//
var age=function () {
    console.log("27");
}
age();
//arrow fn//
let dept=()=>{
    console.log("dept");
}
dept();


//if, elseif,else//

function time() {
    if (time<24){
        console.log("great day");
    }
    else if(time>=24){
        console.log("coimbatore heavy rain");
    }
    else{
        console.log("raining monday");
    }
    
}
time();


//switch//
var day=1;
switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log(tuesday);
        break;

    case 3:
        console.log("wednesday");    
        break;
    case 4:
        console.log("thrusday");
        break;
    case 5:
        console.log("friday");    
        break;
    
}
//hoisting//
//let, const//-reference error
var r=30;
console.log("30");