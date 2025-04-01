const accountId = 144553
let accountEmail = "bhavay@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2  // Not allowed as const variable can't be changed

accountEmail = "hariom@gmail.com"
accountPassword = "2121"
accountCity = "Delhi"

console.log(accountId);  // displays on console
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])  // displays on console in tabular form

/*
Prefer not to use var
because of issue in block scope and functional scope
*/