try{
    //Code that may throw an error
    throw new Error("An Error");
}
catch (error)
{
    //code to handle the error
    console.error(error.message);
}
finally 
{
    //code that will run regardless of whether there was an error
    console.log("Cleanup code");
}