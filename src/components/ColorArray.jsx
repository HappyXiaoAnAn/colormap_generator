import { useState } from "react";
import SlTextarea from '@shoelace-style/shoelace/dist/react/textarea';
import SlRadioGroup from '@shoelace-style/shoelace/dist/react/radio-group';
import SlRadioButton from '@shoelace-style/shoelace/dist/react/radio-button';

import SlCopyButtonAdjust from '../copy-button-adjust/SlCopyButtonAdjust.js';

const SEPARATORS = { comma: ',', tab: '\t', space: ' ' }

export function ColorArray({colorOutRgb}) {
    const [colorType, setColorType] = useState('RGB')
    const [separatorKey, setSeparatorKey] = useState('comma')
    const separator = SEPARATORS[separatorKey]

    const colorOutputString = colorOutRgb
        .map((rgb) => colorType === 'Hex' ? rgbToHex(rgb) : rgb.join(separator))
        .join('\n') + '\n';

    return (
        <>
            <div className="code-header">
                <div className="format-row">
                    <SlRadioGroup size="small" label="Type" value={colorType} onSlChange={(e) => setColorType(e.target.value)}>
                        <SlRadioButton value="RGB">RGB</SlRadioButton>
                        <SlRadioButton value="Hex">Hex</SlRadioButton>
                    </SlRadioGroup>
                    {colorType === 'RGB' && (
                        <SlRadioGroup size="small" label="Separator" value={separatorKey} onSlChange={(e) => setSeparatorKey(e.target.value)}>
                            <SlRadioButton value="comma">,</SlRadioButton>
                            <SlRadioButton value="tab">tab</SlRadioButton>
                            <SlRadioButton value="space">space</SlRadioButton>
                        </SlRadioGroup>
                    )}
                </div>
                <SlCopyButtonAdjust value={colorOutputString} />
            </div>
            <SlTextarea className='code-area' value={colorOutputString} rows={Math.min(colorOutRgb.length + 1, 20)} readOnly></SlTextarea>
        </>
    )
}

function rgbToHex(rgb) {
    return '#' + rgb.map((c) => (+c).toString(16).padStart(2, '0')).join('');
}
