import { useState } from 'react'
import { PythonCode } from './components/PythonCode'
import { ColorArray } from './components/ColorArray'

import SlTextarea from '@shoelace-style/shoelace/dist/react/textarea';
import SlTabGroup from '@shoelace-style/shoelace/dist/react/tab-group';
import SlTab from '@shoelace-style/shoelace/dist/react/tab';
import SlTabPanel from '@shoelace-style/shoelace/dist/react/tab-panel';
import SlRadioGroup from '@shoelace-style/shoelace/dist/react/radio-group';
import SlRadioButton from '@shoelace-style/shoelace/dist/react/radio-button';
import { parseColorData, serializeColorData } from './utils/colorParser';

export function ColorOutputText({colorInRgb, colorOutRgb, setColormap, addHistory}) {
    const [format, setFormat] = useState('rgb');

    const colorString = serializeColorData(colorInRgb, format);

    function handleTextChange(e) {
        const colormapData = parseColorData(e.target.value, format);
        setColormap(colormapData);
        addHistory(colormapData);
    }

    return (
        <SlTabGroup>
            <SlTab slot="nav" panel="edit">Edit as text</SlTab>
            <SlTab slot="nav" panel="array">Color array</SlTab>
            <SlTab slot="nav" panel="python">Python</SlTab>

            <SlTabPanel name="edit">
                <div className="format-row">
                    <SlRadioGroup size="small" label="Format" value={format} onSlChange={(e) => setFormat(e.target.value)}>
                        <SlRadioButton value="rgb">R G B</SlRadioButton>
                        <SlRadioButton value="hex">#RRGGBB</SlRadioButton>
                    </SlRadioGroup>
                </div>
                <SlTextarea
                    className="code-area"
                    value={colorString}
                    rows={Math.min(colorInRgb.length + 1, 20)}
                    helpText="One control point per line; empty lines are interpolated. Changes apply when the box loses focus."
                    onSlChange={handleTextChange}
                />
            </SlTabPanel>
            <SlTabPanel name="array">
                <ColorArray colorOutRgb={colorOutRgb} />
            </SlTabPanel>
            <SlTabPanel name="python">
                <PythonCode colorOutRgb={colorOutRgb} />
            </SlTabPanel>
        </SlTabGroup>
    )
}
