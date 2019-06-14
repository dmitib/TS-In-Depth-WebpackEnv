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
