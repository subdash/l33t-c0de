function isPalindrome(s: string): boolean {
    // We only want to deal with letters and numbers,
    // and ignore their case.
    const alphaNumOnly = s.split('')
        .map((ch) => ch.toLowerCase())
        .filter(isAlphaNum);

    // Compare first and last character. If they
    // aren't the same, we don't have a palindrome.
    while (alphaNumOnly.length > 1) {
        const first = alphaNumOnly.shift();
        const last = alphaNumOnly.pop();
        if (first !== last) {
            return false;
        }
    }
    // If we get down to 0 or 1 characters, we do
    // have a palindrome.
    return true;
};

const isAlphaNum = (chr: string): boolean =>
    (chr >= 'a' && chr <= 'z') ||
    (chr >= '0' && chr <= '9');
