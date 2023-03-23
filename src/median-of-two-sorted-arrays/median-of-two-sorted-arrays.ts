function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Not the fastest solution, but it will work. Merge both arrays,
    // re-sort, and return the median.
    const merged = [...nums1, ...nums2].sort((n1, n2) => n1 - n2);
    return median(merged);
};

const median = (nums: number[]): number => {
    // Handle zero-length case
    if (nums.length === 0) {
        return 0;
    }

    // Handle even length case
    if (nums.length % 2 === 0) {
        const lower = (nums.length / 2) - 1;
        const upper = (nums.length / 2);
        return (nums[lower] + nums[upper]) / 2;
    }

    // Handle odd length case
    const middle = Math.floor(nums.length / 2);
    return nums[middle];
}

