const maxSubArray = (nums: number[]): number => {
    // Kadane's algorithm
    let currSum = 0;
    let maxSum = -(Math.pow(10, 4));

    for (const num of nums) {
        currSum += num;
        if (currSum > maxSum) {
            maxSum = currSum;
        }
        if (currSum < 0) {
            currSum = 0;
        }
    }

    return maxSum;
};
/*
const maxSubArray = (nums: number[]): number => {
    let localMax = nums[0];
    let finalMax = localMax;
    for (const num of nums.slice(1)) {
        // If the current number is greater than the previous max,
        // then it is the new local max.        
        localMax = Math.max(num, localMax + num);
        if (localMax > finalMax) {
            finalMax = localMax;
        }
    }
    return finalMax;
}
*/

/*
// Works for all but 10 test cases where we get this error:
terminate called after throwing an instance of 'std::bad_alloc'
  what():  std::bad_alloc
function maxSubArray(nums: number[]): number {
    if (nums.length === 1) {
        return nums[0];
    }

    const sums: Map<string, number> = new Map();
    let max = nums[0];

    for (let i = 0; i < nums.length; ++i) {
        for (let j = i; j < nums.length; ++j) {
            let newSum;
            switch (j - i) {
                case 0:
                    newSum = nums[i];
                    break;
                case 1:
                    newSum = nums[i] + nums[j];
                    break;
                default:
                    newSum = sums.get(mapKey(i, j - 1)) + nums[j];
                    break;
            }
            
            sums.set(mapKey(i, j), newSum);
            if (newSum > max) {
                max = newSum;
            }
        }
    }
    

    return max;
};

const mapKey = (x: number, y: number): string => `${x}:${y}`;
*/

