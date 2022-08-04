
console.log(parseInt('10'));  // 10
console.log(parseInt('10.00'));  // 10
console.log(parseInt('10.33'));  // 10
/*
    parseInt will convert string into number. If it's a string and can be converted into number, then it will be converted into Number
*/
console.log(parseInt('30 40 50'));  // 30
/*
   since '30 40 50' is a string, here it only takes the first part 
   '30' which can be converted to number.
*/
console.log(parseInt('  60  '));   // 60
/*
   since '  60  ' is a string, here it only takes the first part 
   '60' which can be converted to number.
*/
console.log(parseInt('40 years'));  // 40
/*
   since '40 years' is a string, here it only takes the first part 
   '40' which can be converted to number.
*/
console.log(parseInt('He was 22'));  // NaN
/*
   since 'He was 22' is a string, here it only takes the first part 
   'He' which can't be converted to number, so it will print NaN.
*/

// ParseInt has another argument which is optional and it is a base system.

console.log(parseInt(1010, 2));  // 10
/*
    in the second argument, it represents the base system. If it is 2, then it's a binary system, if it is 8, then it is a octa system.
    '1010' in binary it is the value of 10.
*/

