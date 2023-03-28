class MyQueue {
    /*
        We'll use s1 as the queue. All operations are the same
        as for a stack except pop. Not sure if using .length on
        the array is cheating here but most stack data structures
        have a size member, so I think it's okay. >.>
    */
    private s1 = [];
    private s2 = [];

    constructor() {}

    push(x: number): void {
        this.s1.push(x);
    }

    pop(): number {
        // Take each value in the stack except for the last
        // and push into s2, to temporarily hold the values
        // in reverse order.
        while (this.s1.length > 1) {
            this.s2.push(this.s1.pop());
        }
        // We want to return the last value, so hold on to it
        const poppedValue = this.s1.pop();
        // Push values back into s1 starting with the last. Since
        // they are reversed in s2, they'll now be in the correct
        // order in s1, and s2 will be empty for the next pop call.
        while (this.s2.length > 0) {
            this.s1.push(this.s2.pop());
        }
        return poppedValue;
    }

    peek(): number {
        return this.s1[0];
    }

    empty(): boolean {
        return this.s1.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

