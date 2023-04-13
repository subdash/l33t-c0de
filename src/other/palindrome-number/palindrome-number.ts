function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }
    if (x === 0) {
        return true;
    }

    const digits = [];
    // Push digits into array
    let remainder = x;
    while (remainder > 0) {
        digits.push(remainder % 10);
        remainder = Math.floor(remainder / 10);
    }

    // Compare first and last in array. If they are
    // not equal, it's not a palindromic number.
    while (digits.length > 1) {
        const x = digits.shift();
        const y = digits.pop();
        if (x !== y) {
            return false
        }
    }

    return true;
};

