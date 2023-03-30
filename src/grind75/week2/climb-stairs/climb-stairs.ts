function climbStairs(n: number): number {
    if (n < 3) {
        return n;
    }
    const fibSequence = [1, 2];
    for (let i = 3; i <= n; ++i) {
        let idx = i - 1;
        fibSequence[idx] = fibSequence[idx - 1] + fibSequence[idx - 2];
    }
    return fibSequence[n - 1];
};

