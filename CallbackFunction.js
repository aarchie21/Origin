//Synchronous Callback Function
//First the callback function will execute then the console.log statement will
// function parentFunction(name, callback)
// {
//     callback();
//     console.log("Hey "+name);
// }

// function randomFunction()
// {
//     console.log("Hey I am callbackfunction");
// }

// parentFunction("Random String",randomFunction);

//Asynchronous Callback Function Example

// function parentFunction(name, callback)
// {
//     setTimeout(callback,1000);
//     console.log("Hey "+name);
// }

// function randomFunction()
// {
//     console.log("Hey I am callbackfunction");
// }

// parentFunction("Random String",randomFunction);

//Using Anonymous Function

// parentFunction("Random String",function()
// {
//     console.log("Hey I am callbackfunction");
// });

//Using Arrow Function
// const parentFunction=(name, callback)=> 
// {
//     setTimeout(callback,1000);
//     console.log("Hey "+name);
// }

// function randomFunction()
// {
//     console.log("Hey I am callbackfunction");
// }

// parentFunction("Random String",randomFunction);

const parentFunction=(name, callback)=> 
{
    setTimeout(callback,1000);
    console.log("Hey "+name);
}
parentFunction=("Random String",function)=>

    console.log("Hey I am callbackfunction");


