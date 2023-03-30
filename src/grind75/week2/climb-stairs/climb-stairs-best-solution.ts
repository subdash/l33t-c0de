function climbStairs(n: number): number {
    if (n < 3) {
        return n;
    }
    /*
        The solution to this problem is to get n from the fibonacci sequence.
        We can't use recursion because it will exceed the time limit.

        In order to calculate a number in the fibonacci sequence, you only
        need the previous two numbers from the sequence, so we will only store
        2 at a time.
     */
    let fibSequence: [number, number] = [1, 2];
    for (let i = 3; i <= n; ++i) {
        // New number in sequence is the sum of the last 2
        const result = fibSequence[0] + fibSequence[1];
        // Swap the first with the second, shifting the sequence forward 1 and
        // store the sum of the previous two numbers as the next num in the sequence
        fibSequence = [fibSequence[1], result];
    }
    return fibSequence[1];
};

