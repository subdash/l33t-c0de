function containsDuplicate(nums: number[]): boolean {
    if (nums.length === 1) {
        return false;
    }

    const hMap = new Map();

    for (const num of nums) {
        const lookedUp = hMap.get(num);
        if (lookedUp) {
            return true;
        } else {
            hMap.set(num, true);
        }
    }
    return false;
};

