// By far NOT the most efficient solution, but a bit
// more elegant than the nested for loop.
const twoSum = (nums: number[], target: number) => {
 for (let i = 0; i < nums.length; ++i) {
   const rest = nums.slice(i + 1);
   const complement = rest.findIndex((n) => n + nums[i] === target);
   if (complement !== -1) {
     // Since we're slicing the list, we'll need to add the
     // number of elements we sliced off (i) plus 1 to get
     // the proper index
     return [i, complement + i + 1];
   }
 }
 throw new Error('LeetCode promised this would not happen...');
}

