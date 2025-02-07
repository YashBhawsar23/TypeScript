// let arr: [string, number] = ['Yash', 27]

// let arr2: [number, string] = [25, "Dev"]

// Enums -> enumerations

// enum UserRoles {
//     ADMIN = 'admin',
//     GUEST = 'guest',
//     SUPER_ADMIN = 'super_admin'
// }

// enum StatusCodes {
//     ABANDONED = "abandoned status code is 500",
//     NOT_FOUND = 'notfound status code is 404'
// }

//  let a : unknown
//  a = 27
//  a = 'Yash'

//  if(typeof a === 'string') {
//     a.toUpperCase()
//  }

// interface User{
//     name: string,
//     email: string,
//     password: string,
//     // id: number,
//     // gender?: string
// }

// interface Admin extends User {
//     admin: boolean
// }
 
// function abcd(obj: Admin){
//     obj.admin
// }

// Aliases
// type arg = string | number

// function abcd(obj:arg){

// }

// type User = {
//     name: string,
//     email: string
// }

// type Admin = User & {
//     getDetails(user: string):void
// }

// function abcd(a:Admin){
//     a.


// class Person {
//     // Constructor
//     constructor( public name: string,public age: number) {    
//     }
  
//     // Method
//     greet(): string {
//       return `Hello, I'm ${this.name}!`;
//     }
//   }
  
//   // Create an instance
//   const Yash = new Person("Yash", 27);
//   console.log(Yash.greet()); 

 
let a :any = 12

a as string