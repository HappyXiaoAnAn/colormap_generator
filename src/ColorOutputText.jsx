import { useState } from 'react'
import { PythonCode } from './components/PythonCode'
import { ColorArray } from './components/ColorArray'

import SlTextarea from '@shoelace-style/shoelace/dist/react/textarea';
import { parseColorData } from './utils/colorParser';

export function ColorOutputText({colorInRgb, colorOutRgb, setColormap, addHistory}) {

    let colorString = ''; // RGB color codes
    colorInRgb.map((tmp)=>{
        colorString += tmp=='' ? '\n' : (tmp[0]+' '+tmp[1]+' '+tmp[2]+'\n')
    })

    function handleTextChange(e) {
        const colormapData = parseColorData(e.target.value);
        setColormap(colormapData)
        addHistory(colormapData)
    }

    return (
        <div className="txtarea">
            <div>
                <PythonCode colorOutRgb={colorOutRgb} />
                <ColorArray colorOutRgb={colorOutRgb}/>
            </div>
            <SlTextarea value={colorString} rows={colorInRgb.length+1} onSlChange={(e) => handleTextChange(e)}></SlTextarea>
        </div>
    )
}