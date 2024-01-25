//setTimeout Function
//Executes a function or a peice of code once after a specified delay

// const delayedFunction=()=>{
//     console.log('Delayed function executed!');
// };
// console.log("hi!");
// setTimeout(delayedFunction,2000); // Executes after 2 seconds
// console.log("what!?");

//setInterval Function'
//Repeatedly executes a function or a piece of code at regular intervals

// const repeatedFunction=()=>{
//     console.log('Repeated function executed');
// };
// const intervalId=setInterval(repeatedFunction,1000);

function repeatedFunction()
{
    console.log('Executing repeated function...');
}

const intervalId = setInterval(repeatedFunction,1000);

setTimeout(()=> 
{
    clearInterval(intervalId);
    console.log('Interval stopped.');
},5000);

// const repeatedFunction=()=>{
//     console.log('Repeated function executed');
// };
// const intervalId=setInterval(repeatedFunction,1000);//execute every 1 second
// //after sometime if you want ot stop(e.g., 5000 milliseconds),stop interval
// setTimeout(()=>{
//     clearInterval(intervalId);
//     console.log("Interval stopped.");
// },5000);