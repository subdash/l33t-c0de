function isAnagram(s: string, t: string): boolean {
    const hashTable = {};
    if (s.length !== t.length) {
        return false;
    }
    for(let i = 0; i < s.length; ++i) {
        if (hashTable[s[i]] === undefined) {
            hashTable[s[i]] = 1;
        } else {
            hashTable[s[i]] += 1;
        }
        if (hashTable[t[i]] === undefined) {
            hashTable[t[i]] = -1;
        } else {
            hashTable[t[i]] -= 1;
        }
    }

    return Object.values(hashTable).find((count) => count !== 0) === undefined;
};

