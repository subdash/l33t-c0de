function canConstruct(ransomNote: string, magazine: string): boolean {
    if (ransomNote.length > magazine.length) {
        // Not enough letters in magazine to create note
        return false;
    }
    const hashMap = {};
    let i = 0;
    while (i < magazine.length) {
        let noteLetter = ransomNote[i];
        let magLetter = magazine[i];

        ++i;

        /*
            We'll increment the letter count to the hash map for each letter
            in the magazine, and decrement it for every letter in the ransom
            note. 
        */

        if (hashMap[magLetter] === undefined) {
            hashMap[magLetter] = 1;
        } else {
            hashMap[magLetter] += 1;
        }


        if (!noteLetter) {
            continue;
        }
        if (hashMap[noteLetter] === undefined) {
            hashMap[noteLetter] = -1;
        } else {
            hashMap[noteLetter] -= 1;
        }
    }

    /*
        0 is okay, that means we have exactly enough letters. Any value less
        than 0 indicates that there is a letter needed in the magazine that's
        not present in the ransom note.
    */
    return Object.values(hashMap).every((n) => n >= 0);
};

