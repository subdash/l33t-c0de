function isPalindrome(s: string): boolean {
    const alphaNumOnly = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    return alphaNumOnly === alphaNumOnly.split('').reverse().join('');
};

