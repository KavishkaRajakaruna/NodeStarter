//Function expression

//Regular function 
function sayHi(){
    console.log('Hi');

}

//sayHi();

//function expression
var sayBye = function(){
    console.log('Bye');
}


//sayBye();

//pass functions through the functions

var callFunction = function(funki){
    funki();
}
callFunction(sayBye);