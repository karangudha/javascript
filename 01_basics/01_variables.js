const accountId = 1234;
let accountEmail = "hi@gmail.com";
var accountPassword = "12356"
let accountCity = "Jaipur"

let accountState;

//accountId = 2

let accountPassword2 = accountPassword;
accountEmail = "hii@gmail.com"
accountPassword2 = "222"
accountCity = "sikar"

{
    let accountPassword2 = 2345;
    console.table([accountPassword2]);
}

/* 
Prefer not to use var, beacause of issues with scope.
*/
console.table([accountId, accountEmail, accountPassword, accountPassword2, accountCity]);
