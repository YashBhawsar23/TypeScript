// let arr: [string, number] = ['Yash', 27]
// let arr2: [number, string] = [25, "Dev"]
// Enums -> enumerations
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ABANDONED"] = "abandoned status code is 500";
    StatusCodes["NOT_FOUND"] = "notfound status code is 404";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NOT_FOUND);
