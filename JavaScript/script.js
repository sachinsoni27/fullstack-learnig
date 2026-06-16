//understanding variable, data type, operators, loops, conditional statements, function etc

var a = 10;
let b=20;

//data types - primitives - number,string,boolean,null,undefined,symbol and reference types - object,array,function
//{}  []  ()--> reference types
//other pritive types are number,string,boolean,null,undefined,symbol

var num1=[1,2,3,4];
var num2 = num1; //num2 is reference to num1
num2.push(5);
console.log(num1); //output: [1,2,3,4,5] because num2 is reference to num1

// reference type means if you change num2, num1 will change automatically 


//how to actually copy, not reference

var num1 = [1, 2, 3, 4];
var num2 = [...num1]; //spread operator makes a copy
num2.push(5);
console.log(num1); //output: [1,2,3,4] because num2 is copy of num1, not reference

//spread operator creates a copy, so num1 won't change when num2 changes
  


//------- OPERATORS----------------------------------------------------------------------------------------------------------------------
a + b;
a - b;
a * b;
a / b;
a % b;
a ** b;
//&& AND operator  and || OR operator
// 0 ,false, null, undefined, NaN, "" are falsy values
false || 22; //22
false && true; //false
//loops ---for foreach while do while for of
for(var i = 0; i < 5; i++) {
    console.log(i);
}

var arr = [1, 2, 3, 4, 5];
arr.forEach(function(value, index) {
    console.log(value + 2, index);
});

var obj = {name: "harsh", age: 20};
for(var value in obj) {
    console.log(value, obj[value]);

}



//conditional statements
//work on truthy and falsy values
//0 false, null false, undefined false, NaN false, "" false
if (20) {
    console.log("heySachin");
} else {
    console.log("not working");
}

if ("") {
    console.log("heySachin");
} else {
    console.log("not working");
}


//ternary operator
// condition ? true : false
12 > 13 ? "hello" : "bye";



//functions
//-----> function declarations
function abcd() {
    // function statement
}

 /* function(){
    //anonymous function
}

()=> {
    //fat arrow function 

}

a =>{
// fat arrow function with one parameter
}     */

// callback .promises,async await


/*
function getSong(){

setTImeout(function(){
    console.log("song a gaye");},2000)
}

function getMoreSongs(){
    setTimeout(function(){
        console.log("more songs a gaye");},3000)
}

//get.song();
function connectTOServer(cbfn) {
    console.log("connecting server");

    setTimeout(function () {
        console.log("connected to server*******");
        cbfn();
    }, 2000);
}

function fetchCourses(cbfn) {
    console.log("fetching courses...");

    setTimeout(() => {
        cbfn(["course1", "course2", "course3"]);
    }, 2000);
}

connectTOServer(function () {
    fetchCourses(function (data) {
        console.log(data);
    });
});

*/


function connectToServer(){
    return new Promise(function( resolve ,reject ){
        setTimeout (function(){
resolve("connected...");
        },2000)
        })

}
function getCourse(){
    console.log("geeting courses.........." );

    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("getting courses...");
        },2000)
        })
}

connectToServer()
.then(function(response){
    console.log(response);
   return getCourse()
})
.then(function ( response ){
    console.log(response);
})

/// understanding how to organize code into modules and how to import and export them in Node.js
  // const fs = require('fs');
// fs.readFile('file.txt', 'utf8', function(err, data){
//     if(err) console.log(err);
//     else console.log(data);
// });


