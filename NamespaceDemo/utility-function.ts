namespace Utility {
    export namespace Fees {
        export function calculateLateFee(daysLate: number): number {
            return daysLate * .25;
        }
    }

    export function maxBookAllowed(age: number): number {
        return age < 12 ? 3 : 10;
    }

    function privateFunc() {
        console.log(`This is private`);
    }
}