function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const triplets = [];

    for (let i = 0; i < nums.length; i++) {
        // Skip duplicates at start of array
        if (i > 0 && nums[i - 1] === nums[i]) {
            continue;
        }
        let start = i + 1;
        let end = nums.length - 1;

        while (start < end
                && nums[i] !== undefined
                && nums[start] !== undefined
                && nums[end] !== undefined) {
            switch (compareToZero(nums[i], nums[start], nums[end])) {
            case CmpResult.LT:
                // Sum less than zero, so increment start pointer
                start++;
                break;
            
            case CmpResult.GT:
                // Sum greater than zero, decrement end point
                end--;
                break;

            case CmpResult.EQ:
                // Triplet found. Increment start pointer until we have
                // skipped remaining duplicates,
                triplets.push([nums[i], nums[start], nums[end]]);
                start++;
                while (nums[start] === nums[start - 1]) {
                    start++;
                }

                // Decrement start pointer, then increment it until we
                // skip over all values equal to previous.
                end--;
                while (nums[end] === nums[start + 1]) {
                    end++;
                }
                break;
            }
        }
    }

    return triplets;
};

enum CmpResult {
    GT,
    LT,
    EQ
};

const compareToZero = (x: number, y: number, z: number): CmpResult => {
    const sum = x + y + z;
    if (sum < 0) {
        return CmpResult.LT;
    }
    if (sum > 0) {
        return CmpResult.GT;
    }
    return CmpResult.EQ;
}

