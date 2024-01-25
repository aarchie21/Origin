let fruits = ["apple","banana","orange","grapes"];

console.log(fruits[0]);
console.log(fruits[2]);

//Adding elements to the end
fruits.push("kiwi");
console.log(fruits);

//Adding elements to the beginning
fruits.unshift("mango");
console.log(fruits);

//Removing the last element
let removedLast=fruits.pop();

//Removing the first element
let removedFirst=fruits.shift();

//Finding index of an element
let indexOfOrange = fruits.indexOf("orange");

//Iterating using a for loop
for (let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}

//Slicing an array
let citrus =  fruits.slice(1,3);
console.log(citrus);

//Splicing an array (modifying original array)
let removed=fruits.splice(1,2,"pear","lemon");
console.log(removed);

//Concatenating arrays
let moreFruits=["grapefruit","pineapple"];
let allFruits= fruits.concat(moreFruits);


