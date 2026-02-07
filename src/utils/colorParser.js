/**
 * Color parsing utilities for reading RGB/RGBA color data
 */

/**
 * Parse RGBA data from text content (e.g., from .rgb files or user input)
 * @param {string} content - Text content containing color values
 * @returns {Array} Array of [R, G, B] color values (0-255 range)
 */
export function parseRGBAData(content) {
    const lines = content.split('\n');
    const MAX_COLORS = 1000;
    const tempColormap = [];
    let numColors = 0;
    let maxValue = -1.0;

    function isNumerical(s) {
        return !isNaN(parseFloat(s)) && isFinite(s);
    }

    for (let i = 0; i < lines.length && numColors < MAX_COLORS; i++) {
        let line = lines[i].trim();
        if (line.length === 0) {
            line = "#"; // Skip empty lines
        }
        const tokens = line.split(/\s+/);
        if (tokens.length >= 3) {
            let red = -1.0;
            let green = -1.0;
            let blue = -1.0;
            if (isNumerical(tokens[0])) {
                red = parseFloat(tokens[0]);
            }
            if (isNumerical(tokens[1])) {
                green = parseFloat(tokens[1]);
            }
            if (isNumerical(tokens[2])) {
                blue = parseFloat(tokens[2]);
            }
            let alpha = -1.0;
            if (tokens.length > 3 && isNumerical(tokens[3])) {
                alpha = parseFloat(tokens[3]);
            }
            if (red >= 0 && green >= 0 && blue >= 0) {
                const rgbaColor = [red, green, blue, alpha];
                tempColormap.push(rgbaColor);
                numColors++;
                if (red > maxValue) {
                    maxValue = red;
                }
                if (green > maxValue) {
                    maxValue = green;
                }
                if (blue > maxValue) {
                    maxValue = blue;
                }
            }
        }
    }

    const colormap = new Array(numColors).fill(null).map(() => [0.0, 0.0, 0.0, 0.0]);
    for (let i = 0; i < numColors; i++) {
        colormap[i] = tempColormap[i];
    }

    if (maxValue <= 1) {
        for (let i = 0; i < numColors; i++) {
            colormap[i][3] = colormap[i][3] < 0 ? 1.0 : colormap[i][3];
            for (let j = 0; j < 3; j++) {
                colormap[i][j] *= 255.0;
            }
        }
    } else if (maxValue < 256) {
        for (let i = 0; i < numColors; i++) {
            colormap[i][3] = colormap[i][3] < 0 ? 255.0 : colormap[i][3];
        }
    } else {
        for (let i = 0; i < numColors; i++) {
            colormap[i][3] = colormap[i][3] < 0 ? maxValue : colormap[i][3];
            for (let j = 0; j < 3; j++) {
                colormap[i][j] /= maxValue;
                colormap[i][j] *= 255.0;
            }
        }
    }

    // Round RGB values to integers
    for (let i = 0; i < numColors; i++) {
        for (let j = 0; j < 3; j++) {
            colormap[i][j] = Math.round(colormap[i][j]);
        }
    }
    
    return colormap;
}

/**
 * Parse color data from user input or text (with blank color handling)
 * @param {string} content - Text content with color values
 * @returns {Array} Array of [R, G, B] color values or empty strings for blank colors
 */
export function parseColorData(content) {
    const lines = content.split('\n');
    const MAX_COLORS = 1000;
    const tempColormap = [];
    let numColors = 0;
    let maxValue = -1.0;

    function isNumerical(s) {
        return !isNaN(parseFloat(s)) && isFinite(s);
    }
    
    // Remove blank colors at the beginning and ending of colormap
    let startIndex = 0;
    let endIndex = lines.length-1;
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        if(line!='') {
            startIndex=i;
            break;
        }
    }
    for (let i = lines.length-1; i>=0; i--) {
        let line = lines[i].trim();
        if(line!='') {
            endIndex=i;
            break;
        }
    }

    for (let i = startIndex; i < endIndex+1 && numColors < MAX_COLORS; i++) {
        let line = lines[i].trim();
        const tokens = line.split(/\s+/);
        let red = -1.0;
        let green = -1.0;
        let blue = -1.0;
        if (tokens.length >= 3) {
            if (isNumerical(tokens[0])) {
                red = parseFloat(tokens[0]);
            }
            if (isNumerical(tokens[1])) {
                green = parseFloat(tokens[1]);
            }
            if (isNumerical(tokens[2])) {
                blue = parseFloat(tokens[2]);
            }
            let alpha = -1.0;
            if (tokens.length > 3 && isNumerical(tokens[3])) {
                alpha = parseFloat(tokens[3]);
            }
            if (red >= 0 && green >= 0 && blue >= 0) {
                const rgbaColor = [red, green, blue, alpha];
                tempColormap.push(rgbaColor);
                numColors++;
                if (red > maxValue) {
                    maxValue = red;
                }
                if (green > maxValue) {
                    maxValue = green;
                }
                if (blue > maxValue) {
                    maxValue = blue;
                }
            }
        }
        else if(i != lines.length-1) {
            tempColormap.push('');
            numColors++;
        }
    }

    const colormap = new Array(numColors).fill('');
    for (let i = 0; i < numColors; i++) {
        if(tempColormap[i]=='') continue;
        colormap[i] = tempColormap[i];
    }

    if (maxValue <= 1) {
        for (let i = 0; i < numColors; i++) {
            if(colormap[i]=='') continue;
            colormap[i][3] = colormap[i][3] < 0 ? 1.0 : colormap[i][3];
            for (let j = 0; j < 3; j++) {
                colormap[i][j] *= 255.0;
            }
        }
    } else if (maxValue < 256) {
        for (let i = 0; i < numColors; i++) {
            if(colormap[i]=='') continue;
            colormap[i][3] = colormap[i][3] < 0 ? 255.0 : colormap[i][3];
        }
    } else {
        for (let i = 0; i < numColors; i++) {
            if(colormap[i]=='') continue;
            colormap[i][3] = colormap[i][3] < 0 ? maxValue : colormap[i][3];
            for (let j = 0; j < 3; j++) {
                colormap[i][j] /= maxValue;
                colormap[i][j] *= 255.0;
            }
        }
    }

    // Round RGB values to integers
    for (let i = 0; i < numColors; i++) {
        if(colormap[i]=='') continue;
        for (let j = 0; j < 3; j++) {
            colormap[i][j] = Math.round(colormap[i][j]);
        }
    }
    
    return colormap;
}
