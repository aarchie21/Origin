//For loop
// for(let i=0;i<5;i++)
// {
//     console.log(i);
// }

// let count=0;
// while(count<5)
// {
//     console.log(count);
//     count++;
// }

//Do While loop
// let count=0;
// do
// {
//     console.log(count);
//     count++;
// }while(count<5);

//For..In loop
let person= {name :"John",age:30,occupation:"Developer"};
for(let key in person)
{
    console.log(key+" : "+person[key]);
}