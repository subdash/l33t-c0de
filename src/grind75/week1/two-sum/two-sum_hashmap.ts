const twoSum = (nums: number[], target: number) => {
    const hashMap = {};
    for (let i = 0; i < nums.length; ++i) {
        const currNum = nums[i];
        // This is the value we need to add to nums[i] to get target
        const complement = target - currNum;
        const complementIndex = hashMap[complement];
        // If we've already come across that number, return it
        // as the first index since it's earlier in the array,
        // with the index of the current number second.
        if (complementIndex !== undefined) {
            return [complementIndex, i];
        } else {
            hashMap[currNum] = i;
        }
    }
    throw new Error('LeetCode promised this would not happen...');
}

