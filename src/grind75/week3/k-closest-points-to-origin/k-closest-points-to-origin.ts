const kClosest = (points: number[][], k: number): number[][] =>
    points
        // Get distance of each coordinate and create pair
        // of coords and distance.
        .map(([x, y]) => ({
            coords: [x, y],
            distance: Math.sqrt(x * x + y * y)
        }))
        // Sort by distance
        .sort((a, b) => {
            if (a.distance < b.distance) {
                return -1;
            }
            if (b.distance < a.distance) {
                return 1
            };
            return 0;
        })
        // Transform back into array of coords
        .map(({ coords }) => coords)
        // Return k results
        .slice(0, k);
