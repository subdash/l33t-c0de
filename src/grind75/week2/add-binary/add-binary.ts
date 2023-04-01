function addBinary(a: string, b: string): string {
    const maxDigits = Math.max(a.length, b.length);
    let result = [];
    let carry = 0;
    for (let i = 0; i < maxDigits; ++i) {
        const aIdx = a.length - i - 1;
        const bIdx = b.length - i - 1;
        const digitA = aIdx >= 0 ? Number(a[aIdx]) : 0;
        const digitB = bIdx >= 0 ? Number(b[bIdx]) : 0;

        carry += digitA + digitB;

        // We don't use push the sum of the numbers, but either
        // 0 or 1 depending on the value of carry.
        result.push(
            carry % 2 === 1
                ? 1
                : 0
        );

        carry = Math.floor(carry / 2);
    }
    if (carry === 1) {
        result.push(1);
    }
    return result.reverse().join('');
};
