var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            return daysLate * .25;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBookAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBookAllowed = maxBookAllowed;
    function privateFunc() {
        console.log("This is private");
    }
})(Utility || (Utility = {}));
/// <reference path="utility-function.ts" />
var books = Utility.maxBookAllowed(15);
console.log(books);
var util = Utility.Fees;
var fee = util.calculateLateFee(10);
console.log(fee);
