function longestPalindrome(s: string): number {
    // Count all characters
    const lMap = letterMap(s);
    let hasOdd = false;
    /*
        If a letter is counted n times and n is even, we can use
        the letter that many times. If n is odd, we can use that letter
        n - 1 times. We can use any letter in the middle of the palindrome,
        so if a letter is counted an odd number of times, we can use it once,
        but not use any of the other odd counted letters an additional time.
     */
    const n = Array.from(lMap
        .values())
        .reduce((acc, currVal) => {
            const remainder = currVal % 2;
            if (!hasOdd && remainder === 1) {
                hasOdd = true;
            }
            return acc + (currVal - remainder);
        }, 0);
    return n + (hasOdd ? 1 : 0);
};

const letterMap = (s: string): Map<string, number> => {
    const map = new Map();
    for (const ch of s.split('')) {
        const chCount = map.get(ch);
        if (chCount === undefined) {
            map.set(ch, 1);
        } else {
            map.set(ch, chCount + 1);
        }
    }
    return map;
};

