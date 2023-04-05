function threeSum(nums: number[]): number[][] {
    /*
        Sliding window approach: check each number, skipping duplicates
        you encounter. When a new number is found, use a sliding window
        to find sums equal to 0. We'll check all non-duplicate numbers
        within the window where the lowest number is the one in the loop
        (i), the next non-duplicate (start) and the last non-duplicate (end).
    */
    nums.sort((a, b) => a - b); // sort in ascending order, negatives first
    const triplets = [];

    for (let i = 0; i < nums.length; ++i) {
        // Skip dupes at beginning
        if (nums[i] === nums[i - 1]) { continue }

        let start = i + 1;
        let end = nums.length - 1;
        while (start < end) {
            const sum = nums[i] + nums[start] + nums[end];

            if (sum === 0) {
                // Triplet found
                triplets.push([nums[i], nums[start], nums[end]]);

                // Move start of window forward until you pass dupes
                ++start;
                while (nums[start] === nums[start - 1]) { ++start }

                // Move end of window back 1, then move it forward until
                // you pass dupes at end.
                --end;
                while (nums[end] === nums[start + 1]) { ++end }
            } else if (sum < 0) {
                // Move start of window forward
                ++start;
            } else {
                // Sum greater than 0, move end of window back
                --end;
            }
        }
    }
    return triplets;
};

