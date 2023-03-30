const twoSum = (nums: number[], target: number): number[] => {
    let index = 0;
    const indices = [];
    while (index <= nums.length) {
        let secondIndex = 0;
        while (secondIndex <= nums.length) {
            if (index !== secondIndex) {
                if (nums[index] + nums[secondIndex] === target) {
                    indices.push(...[index, secondIndex]);
                    break;
                }
            }
            
            secondIndex += 1;
        }
        if (indices.length !== 0) {
            break;
        }
        index += 1;
    }
    return indices;
};
