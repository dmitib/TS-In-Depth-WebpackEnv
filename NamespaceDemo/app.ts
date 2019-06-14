/// <reference path="utility-function.ts" />

const books: number = Utility.maxBookAllowed(15);
console.log(books);

import util = Utility.Fees;
const fee = util.calculateLateFee(10);
console.log(fee);

