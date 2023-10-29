"use strict";
// //tuples
// let user: [number, string] = [20, "becks"];
// user.push(1)//only method in TS that has a loophole
// enums
// const  enum Size { small = 1, medium, large };
// let mySize: Size = Size.medium;
// console.log(mySize)
// working with functions and detecting unused variables
// function calculateTax(income: number, taxYear?: number): number{
//     if((taxYear || 2022) < 2022)
//     return income * 1.2;
//     return income * 1.3;
// }
// calculateTax(10000)
// objects
// let employee = {id:1}
// const getFullName =(name:string, surname:string):string=>{
//     return name +" " + surname;
// };
// console.log(getFullName("becks", "shee"));
// creating objects in TS
// const user:{name:string, age:number} = {
//     name: 'becky',
//     age:25
// }
// const user2:{name:string, age:number} = {
//     name: 'kalim',
//     age:21
// }
// to avoid the object duplication about we need interfaces to help us describe the entities
// interfaces
// interface User{
//     name:string;
//     age:number;
//     //creating a function in our interface
//     getMessage(): string
// }
// const user: User = {
//     name: 'becky',
//     age:25,
//     getMessage() {
//         return "hello"
//     },
// }
// const user2: User= {
//     name: 'kalim',
//     age:21,
//     getMessage() {
//         return 'hi there' + this.name;
//     },
// }
// console.log(user.getMessage());
//union & type aliases in TS. union is popularly used when checking for null
//union
// let pageNumber: string | number = "1"
// let errorMessage: string|null = null;
// let someProp: null | undefined
// //aliases- we can create our own types for different things
// type ID = string
// type popularTag = string
// //union+aliases
// type MaybePopularTag = popularTag | null
// interface UserInterface{
//     id: ID;
//     name: string;
//     surname: string;
//     age: number
// }
// const popularTags: popularTag[] = ['tea', 'coffee'];
// const teaTags: MaybePopularTag = 'oolong cha';
// data types
// void in TS 
