let shadowedVar="I am global";
function exampleFunction()
{
    let shadowedVar=" I am local";
    console.log(shadowedVar);
}
exampleFunction();
console.log(shadowedVar);