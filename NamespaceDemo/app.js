/// <reference path="utility-function.ts" />
var books = Utility.maxBookAllowed(15);
console.log(books);
var util = Utility.Fees;
var fee = util.calculateLateFee(10);
console.log(fee);
