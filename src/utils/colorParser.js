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

function hexToRgb(hex) {
    const result = /^#?([A-Fa-f0-9]{6})$/i.exec(hex);
    if (!result) return null;

    return [
        parseInt(result[1].slice(0, 2), 16),
        parseInt(result[1].slice(2, 4), 16),
        parseInt(result[1].slice(4, 6), 16)
    ];
}

function rgbToHex(rgb) {
    if (!Array.isArray(rgb) || rgb.length < 3) return '';
    const r = Math.max(0, Math.min(255, Math.round(rgb[0])));
    const g = Math.max(0, Math.min(255, Math.round(rgb[1])));
    const b = Math.max(0, Math.min(255, Math.round(rgb[2])));
    const toHex = (v) => v.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function serializeColorData(colorInRgb, format = 'rgb') {
    if (!Array.isArray(colorInRgb)) return '';

    return colorInRgb
        .map((entry) => {
            if (entry === '') return '';
            if (!Array.isArray(entry) || entry.length < 3) return '';

            if (format === 'hex') {
                return rgbToHex(entry);
            }

            const r = Number(entry[0]);
            const g = Number(entry[1]);
            const b = Number(entry[2]);
            if ([r, g, b].some((v) => Number.isNaN(v))) return '';
            return `${r} ${g} ${b}`;
        })
        .join('\n');
}

export function parseColorData(content, format = 'rgb') {
    if (format.toLowerCase() === 'hex') {
        const lines = String(content).split('\n');
        const result = [];

        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed === '') {
                result.push('');
                continue;
            }
            const rgbValue = hexToRgb(trimmed);
            if (!rgbValue) {
                continue; // invalid line ignored
            }
            result.push([rgbValue[0], rgbValue[1], rgbValue[2], 255.0]);
        }

        return result;
    }

    // Default RGB behavior (existing parser semantics)
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

