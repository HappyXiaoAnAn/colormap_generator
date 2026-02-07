/**
 * Color interpolation utilities for colormap generation
 */

// Greatest common divisor
const gcd = (x, y) => !y ? x : gcd(y, x % y);

// Least common multiple
const lcm = (a, b) => (a / gcd(a, b)) * b;

// Find GCD from array
const findGCD = (nums) => gcd(Math.max(...nums), Math.min(...nums));

/**
 * Interpolate colors between control points
 * @param {Array} colorArray - Array of [R, G, B] color values
 * @param {number} numColorsOut - Number of output colors
 * @returns {Array} Interpolated colors
 */
export function interpolateColors(colorArray, numColorsOut) {
    const numColorsIn = colorArray.length;
    numColorsOut = Math.max(numColorsOut, numColorsIn);
    const colorGcd = findGCD([numColorsIn-1, numColorsOut-1]);
    const totalPoints = lcm(numColorsOut-1, numColorsIn-1)+1;
    const stepA = (numColorsIn-1)/colorGcd;
    const stepB = (numColorsOut-1)/colorGcd
    const tempColors = [];
    const result = [];
    
    let leftColorIdx = 0;
    for (let j = 0; j < colorArray.length-1; j++) {
        if(!colorArray[j+1]) continue;
        const delta = 1/stepB/(j-leftColorIdx+1); // Calculate interval
        for (let i = 0; i < stepB*(j-leftColorIdx+1); i++) {
            const red = colorArray[leftColorIdx][0]+(colorArray[j+1][0]-colorArray[leftColorIdx][0])*delta*i;
            const green = colorArray[leftColorIdx][1]+(colorArray[j+1][1]-colorArray[leftColorIdx][1])*delta*i;
            const blue = colorArray[leftColorIdx][2]+(colorArray[j+1][2]-colorArray[leftColorIdx][2])*delta*i;
            tempColors.push([parseInt(red),parseInt(green),parseInt(blue)])
        }
        leftColorIdx = j+1;
    }
    tempColors.push(colorArray[colorArray.length-1]);
    for (let i = 0; i < totalPoints; i=i+stepA) {
        result.push(tempColors[i]);
    }
    return result;
}
