type Coords = [number, number];
type FourDirections = [Coords, Coords, Coords, Coords];

/*
const printImage = (image: number[][]): void => {
    for (const row of image) {
        const rowItems = row.join(' ');
        console.log(rowItems);
    }
    console.log('\n');
}
*/
function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const maxRows = image.length;
    const maxCols = image[0].length;
    const initColor = image[sr][sc];
    const queue: Coords[] = [[sr, sc]];

    if (initColor === color) {
        // We only want to connect pixels with same color
        // as starting pixel
        return image;
    }

    while (queue.length > 0) {
        // printImage(image);
        const queueItem = queue.shift();

        if (queueItem === undefined) {
            continue;
        }

        const currentRow = queueItem[0];
        const currentCol = queueItem[1];

        // Fill pixel at coords
        image[currentRow][currentCol] = color;

        const fourDirections = getFourDirections([currentRow, currentCol]);
        for (const coord of fourDirections) {
            const newRow = coord[0];
            const newCol = coord[1];
            // For each of the 4 directions, add that coordinate to
            // the queue if it is within the bounds of the image.
            if (isValidCoord(coord, maxRows, maxCols) &&
                image[newRow][newCol] === initColor)
            {
                queue.push(coord);
            }
        }
    }

    return image;
};

const getFourDirections = (coords: Coords): FourDirections => {
    const sr = coords[0];
    const sc = coords[1];
    // Left, right, up, down
    return [[sr, sc - 1], [sr, sc + 1],
            [sr - 1, sc], [sr + 1, sc]];
};

const isValidCoord = (coords: Coords, maxRows: number, maxCols: number): boolean => {
    // Make sure coord
    return (coords[0] >= 0 && coords[0] < maxRows) &&
           (coords[1] >= 0 && coords[0] < maxCols);
};
