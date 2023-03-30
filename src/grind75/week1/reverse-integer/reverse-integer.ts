// https://leetcode.com/problems/reverse-integer/solutions/1888703/100-fastest-typescript-solution/?languageTags=typescript

const maxInt = Math.pow(2, 31) - 1;

function reverse(x: number): number {
    if (x === 0) {
        return x;
    }
    const isNegative = x < 0;
    let reversed = 0;
    if (isNegative) {
        // Always deal with positive integers so we don't have to have 2 algorithms
        x = -x;
    }

    while (x > 0) {
        // Get each digit, starting with smallest
        const remainder = x % 10;
        // Multiply result by 10 then add remainder so for each iteration, the
        // last digit moves over in the tens place and the remainder is in the 1s
        // place.
        reversed *= 10;
        reversed += remainder;
        // When we've exhausted all the digits, x will be 0.
        x = Math.floor(x / 10);
    }

    if (reversed > maxInt) {
        return 0;
    }
    return isNegative ? -reversed : reversed;
};

