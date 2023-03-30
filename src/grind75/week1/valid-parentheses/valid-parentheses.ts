function isValid(s: string): boolean {
    if (s.length === 1) {
        return false;
    }

    const stack = [];
    for (let symbol of s.split('')) {
        if (stack[stack.length - 1] === symbol) {
            stack.pop();
            continue;
        }

        switch (symbol) {
        case '{':
            stack.push('}');
            break;
        case '(':
            stack.push(')');
            break;
        case '[':
            stack.push(']');
            break;
        default:
            stack.push(undefined);
        }
    }
    return stack.length === 0;
};

