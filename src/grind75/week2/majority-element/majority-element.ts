/* Solution 1

function majorityElement(nums: number[]): number {
    if (nums.length === 1) {
        return nums[0];
    }
    const sorted = nums.sort();
    const middle = Math.floor(nums.length / 2);
    if (sorted[middle] === sorted[middle + 1]) {
        return sorted[middle + 1];
    }
    return sorted[middle - 1];
};
*/

// Solution 2. Thought this would be more time/space efficient,
// but according to Leet Code it's not.
function majorityElement(nums: number[]): number {
    const numCount = new Map();
    let highest = nums[0];
    let highestCount = 1;
    for (let i = 0; i < nums.length; ++i) {
        let n = nums[i];
        const nCount = numCount.get(n);

        if (nCount) {
            const newVal = nCount + 1;
            numCount.set(n, newVal);
            if (nCount + 1 > highestCount) {
                highest = n;
                highestCount = newVal;
            }
        } else {
            numCount.set(n, 1);
        }
    }

    return highest;
};

