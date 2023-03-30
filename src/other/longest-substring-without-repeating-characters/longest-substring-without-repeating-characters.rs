use std::collections::HashMap;
use std::cmp;

impl Solution
{
    pub fn length_of_longest_substring(s: String) -> i32
    {
        let mut longest: i32 = 0;
        let mut charMap: HashMap<char, i32> = HashMap::new();
        let mut leftIdx: i32 = 0;
        let charVec: Vec<char> = s.chars().collect();

        for n in 0..charVec.len()
        {
            let rightIdx = n as i32;
            let chr = charVec.get(n).unwrap();
            // Check for membership in char map
            if let Some(charIdx) = charMap.get(&chr)
            {
                if *charIdx >= leftIdx
                {
                    // Slide beginning of window to after last occurrence of char
                    leftIdx = *charIdx + 1;
                }                
            }
            // Length of current substring
            let currLen = rightIdx - leftIdx + 1;
            longest = cmp::max(longest, currLen);
            charMap.insert(*chr, rightIdx);
        }

        longest
    }
}

