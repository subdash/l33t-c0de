/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let low = 0;
        let high = Math.pow(2, 31) - 1;

        // If we have a ton of versions and every one is bad,
        // we can skip a lot of processing by checking the first
        // one.
        if (isBadVersion(1)) {
            return 1;
        }

        let firstBadVersion;
        /*
            Binary search the range of all possible versions. If
            we find a bad version, we'll bisect the lower range to check
            earlier versions. If we find a good version, we'll bisect
            the higher range to find a newer bad version.
         */
        while (low <= high) {
            let mid = Math.round(low + (high - low) / 2);
            if (isBadVersion(mid)) {
                firstBadVersion = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return firstBadVersion;
    };
};

