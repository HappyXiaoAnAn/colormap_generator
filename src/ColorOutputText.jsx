import { useState } from 'react'
import { PythonCode } from './components/PythonCode'
import { ColorArray } from './components/ColorArray'

import SlTextarea from '@shoelace-style/shoelace/dist/react/textarea';
import { parseColorData, serializeColorData } from './utils/colorParser';

export function ColorOutputText({colorInRgb, colorOutRgb, setColormap, addHistory}) {
    const [format, setFormat] = useState('rgb');

    const colorString = serializeColorData(colorInRgb, format);

    function handleFormatChange(e) {
        setFormat(e.target.value);
    }

    function handleTextChange(e) {
        const colormapData = parseColorData(e.target.value, format);
        setColormap(colormapData);
        addHistory(colormapData);
    }

    return (
        <div className="txtarea">
            <div>
                <PythonCode colorOutRgb={colorOutRgb} />
                <ColorArray colorOutRgb={colorOutRgb}/>
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
                <label style={{ marginRight: '0.5rem' }} htmlFor="color-format-select">Color text format:</label>
                <select id="color-format-select" value={format} onChange={handleFormatChange}>
                    <option value="rgb">RGB (R G B)</option>
                    <option value="hex">Hex (#RRGGBB)</option>
                </select>
                <span style={{ marginLeft: '1rem', fontSize: '0.85rem', color: '#666' }}>
                    Enter colors in selected format; invalid lines are ignored.
                </span>
            </div>
            <SlTextarea value={colorString} rows={colorInRgb.length+1} onSlChange={(e) => handleTextChange(e)}></SlTextarea>
        </div>
    )
}