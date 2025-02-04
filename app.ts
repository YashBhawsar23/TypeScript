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

interface User{
    name: string,
    email: string,
    password: string,
    id: number,
    gender?: string
}

function getUserData(obj:User){

}

getUserData({name: 'Yash', email: 'Yash', password: "YAsd", id: 27})
 
























