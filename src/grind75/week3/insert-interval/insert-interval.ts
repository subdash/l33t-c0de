function insert(intervals: number[][], newInterval: number[]): number[][] {
    const results = [];
    let modifiedInterval = newInterval;
    for (const interval of intervals) {
        switch (cmpInterval(interval as Interval, modifiedInterval as Interval)) {
        case CmpIntervalResult.NEW_TO_RIGHT:
            // Put the current interval in its place
            results.push(interval);
            break;
        case CmpIntervalResult.NEW_TO_LEFT:
            // Put the new interval next, next iteration will treat
            // current interval as the new one.
            results.push(modifiedInterval);
            modifiedInterval = interval;
            break;
        case CmpIntervalResult.OVERLAP:
            // There is a new interval to be merged instead of current/new
            modifiedInterval = [Math.min(interval[0], modifiedInterval[0]),
                                Math.max(interval[1], modifiedInterval[1])];
            break;
        }
    }

    // We will have one interval left that we need to merge at the end.
    results.push(modifiedInterval);

    return results;
};

type Interval = [number, number];

enum CmpIntervalResult {
    NEW_TO_RIGHT,
    NEW_TO_LEFT,
    OVERLAP,
};

const cmpInterval = (first: Interval, second: Interval): CmpIntervalResult => {
    if (first[1] < second[0]) {
        // Start of new interval greater than end of first, so new is to right
        return CmpIntervalResult.NEW_TO_RIGHT;
    }
    if (first[0] > second[1]) {
        // Start of first greater than end of new, so new is to left
        return CmpIntervalResult.NEW_TO_LEFT;
    }
    // The intervals overlap
    return CmpIntervalResult.OVERLAP;
};

