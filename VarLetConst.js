// function exampleFunction() 
// {
//     if(true)
//     {
//         var functionScopedVar= "I am function-scoped";
//     }
//     console.log(functionScopedVar);
// }
// exampleFunction();
// console.log(functionScopedVar);

// function exampleFunction() 
// {
//     if(true)
//     {
//         let functionScopedVar= "I am function-scoped";
//         console.log(functionScopedVar);
//     }
//     // console.log(functionScopedVar);
// }
// exampleFunction();
// // console.log(functionScopedVar);

// const constantVar= "I am constant";
// if(true)
// {
//     console.log(constantVar);
// }

function exampleFunction()
{
    if(true)
    {
        var functionScopedVar = "I am function-scoped";
        let blockScopedLet= "I am block-scoped";
        const blockScopedConst= "I am constant and block scoped";
        console.log(blockScopedLet);
        console.log(blockScopedConst);
    }    
    console.log(functionScopedVar);
   // console.log(blockScopedLet);
   // console.log(blockScopedConst);
}
exampleFunction();
