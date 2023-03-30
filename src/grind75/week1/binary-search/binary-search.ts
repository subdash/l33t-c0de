function search(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1;
    // When we run out of numbers, high will be lower than low
    while (low <= high) {    
        let mid = Math.round(low + (high - low) / 2);
        const middleValue = nums[mid];

        switch (cmp(middleValue, target)) {
        case CmpResult.EQ:
            // We found it
            return mid;
        case CmpResult.LT:
            // Check upper half of list
            low = mid + 1;
            break;
        case CmpResult.GT:
            // Check lower half of list
            high = mid - 1;
            break;
        }
    }
    return -1;
};

// Not necessary, but makes our control flow branches clearer
enum CmpResult { LT, GT, EQ };

const cmp = (x: number, y: number): CmpResult => {
    if (x === y) {
        return CmpResult.EQ;
    }
    if (x < y) {
        return CmpResult.LT;
    }
    if (x > y) {
        return CmpResult.GT;
    }
    throw new Error('Unreachable');
};
