impl Solution {
    pub fn find_median_sorted_arrays(nums1: Vec<i32>, nums2: Vec<i32>) -> f64 {
        let mut merged = nums1.clone();
        merged.append(&mut nums2.clone());
        merged.sort();
        let totalNums = merged.len();
        match totalNums % 2
        {
            0 =>
            {
                let lowerIdx = (totalNums / 2) - 1;
                let upperIdx = lowerIdx + 1;
                let lowerMedian = merged.get(lowerIdx).unwrap();
                let upperMedian = merged.get(upperIdx).unwrap();
                (*lowerMedian as f64 +
                 *upperMedian as f64) / 2f64
            }
            // Will always be 1, but compiler does not know that
            _ =>
            {
                let middle = totalNums / 2;
                let median = merged.get(middle).unwrap();
                *median as f64
            }
        }
    }
}

