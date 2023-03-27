function maxProfit(prices: number[]): number {
/*
    Naive solution, works until array is too large
    let maxProfit = 0;
    for (let i = 0; i < prices.length; ++i) {
        for (let j = i + 1; j < prices.length; ++j) {
            let profit = prices[j] - prices[i];
            maxProfit = Math.max(maxProfit, profit);
        }
    }
    return maxProfit;
*/
/*
    Final answer modified version of this sliding window solution
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/3313461/typescript-slding-window/?languageTags=typescript
*/
    let startIdx = 0;
    let endIdx = 1;
    let max = 0;

    for (; endIdx < prices.length; ++endIdx) {
        if (prices[startIdx] < prices[endIdx]) {
            // If we encounter a price higher than the starting one,
            // there is a profit. See if it is the greatest so far.
            max = Math.max(max, prices[endIdx] - prices[startIdx]);
        } else {
            // If we don't, start checking from the next number, so
            // if no profits we will do, [0, 1], [1, 2], [2, 3], etc...
            startIdx = endIdx;
        }
    }
    return max;
};

