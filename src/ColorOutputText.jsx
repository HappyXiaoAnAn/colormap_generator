import { useState } from 'react'
import { PythonCode } from './PythonCode'
import { ColorArray } from './ColorArray'

import SlTextarea from '@shoelace-style/shoelace/dist/react/textarea';

export function ColorOutputText({colorinrgb, coloroutrgb, setcolormap, addHistory}) {

    let color_str = ''; // RGB色碼
    colorinrgb.map((tmp)=>{
        color_str += tmp=='' ? '\n' : (tmp[0]+' '+tmp[1]+' '+tmp[2]+'\n')
    })

    function handleTextChange(e) {
        let arr_rgba = read_color(e.target.value);
        setcolormap(arr_rgba)
        addHistory(arr_rgba)
    }

    return (
        <div className="txtarea">
            <div>
                <PythonCode coloroutrgb={coloroutrgb} />
                <ColorArray coloroutrgb={coloroutrgb}/>
            </div>
            <SlTextarea value={color_str} rows={colorinrgb.length+1} onSlChange={(e) => handleTextChange(e)}></SlTextarea>
        </div>
    )
}

function read_color(content) {
    const lines = content.split('\n');
    const MAXCOLORS = 1000;
    const tmpCmap = [];
    // const tmpCmap = new Array(MAXCOLORS).fill(null).map(() => [0.0, 0.0, 0.0, 0.0]);
    let numColors = 0;
    let maxValue = -1.0;

    function isNumerical(s) {
        return !isNaN(parseFloat(s)) && isFinite(s);
    }
    
    // remove blank color at the beginning and ending colormap
    let start_index = 0;
    let end_index = lines.length-1;
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        if(line!='') {
            start_index=i;
            break;
        }
    }
    for (let i = lines.length-1; i>=0; i--) {
        let line = lines[i].trim();
        if(line!='') {
            end_index=i;
            break;
        }
    }

    for (let i = start_index; i < end_index+1 && numColors < MAXCOLORS; i++) {
        let line = lines[i].trim();

        const tokens = line.split(/\s+/);
        let red = -1.0;
        let green = -1.0;
        let blue = -1.0;
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
                let tmpRGBA = [red, green, blue, alpha];
                tmpCmap.push(tmpRGBA);
                // tmpCmap[numColors][0] = red;
                // tmpCmap[numColors][1] = green;
                // tmpCmap[numColors][2] = blue;
                // tmpCmap[numColors][3] = alpha;
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
            tmpCmap.push('');
            numColors++;
        }
    }
console.log(tmpCmap)
    const cmap = new Array(numColors).fill('');
    for (let i = 0; i < numColors; i++) {
        if(tmpCmap[i]=='') continue;
        cmap[i] = tmpCmap[i];
    }

    if (maxValue <= 1) {
        for (let i = 0; i < numColors; i++) {
            if(cmap[i]=='') continue;
            cmap[i][3] = cmap[i][3] < 0 ? 1.0 : cmap[i][3];
            for (let j = 0; j < 3; j++) {
                cmap[i][j] *= 255.0;
            }
        }
    } else if (maxValue < 256) {
        for (let i = 0; i < numColors; i++) {
            if(cmap[i]=='') continue;
            cmap[i][3] = cmap[i][3] < 0 ? 255.0 : cmap[i][3];
            // for (let j = 0; j < 3; j++) {
            //     cmap[i][j] /= 255.0;
            // }
        }
    } else {
        for (let i = 0; i < numColors; i++) {
            if(cmap[i]=='') continue;
            cmap[i][3] = cmap[i][3] < 0 ? maxValue : cmap[i][3];
            for (let j = 0; j < 3; j++) {
                cmap[i][j] /= maxValue;
                cmap[i][j] *= 255.0;
            }
        }
    }

    // round rgb number to integer
    for (let i = 0; i < numColors; i++) {
        if(cmap[i]=='') continue;
        for (let j = 0; j < 3; j++) {
            cmap[i][j] = Math.round(cmap[i][j]);
        }
    }
    
    return cmap;
}