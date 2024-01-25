//Object Literal Notation
// let car={
//     make:"Toyota",
//     model:"Camry",
//     year:2022,
//     iselectric:false,
//     start:function()
//     {
//         console.log("Engine Started!");
//     }
// }
// //Accessing properties
// console.log(car.make);
// console.log(car.year);

// //calling a method
// car.start();

//Object Constructor
function Book(title,author,year)
{
    this.title=title;
    this.author=author;
    this.year=year;
}

//Creating instances of the object

let book1= new Book("The Catcher in the Rye","J.D. Salinger",1951);
let book2= new Book("To Kill a Mockingbird","Harper Lee", 1960);

console.log(book1.title);
