function longestPalindrome(s: string): string {
    // Not necessary but saves time
    if (s.length === 1) {
        return s;
    }
    let longest = '';
    for (let i = 0; i < s.length; ++i) {
        for (let j = i; j < s.length; ++j) {
            const subString = s.slice(i, j + 1);
            if (isPalindrome(subString) && subString.length > longest.length) {
                longest = subString;
            }
        }
    }
    return longest;
};

const isPalindrome = (s: string): boolean => {
    // Not necessary but saves time
    if (s.length === 0) {
        return false;
    }
    if (s.length === 1) {
        return true;
    }
    let result = true;
    for (let i = 0; i <= s.length / 2; ++i) {
        if (s[i] !== s[s.length - i - 1]) {
            result = false;
            break;
        }
    }
    return result;
}

