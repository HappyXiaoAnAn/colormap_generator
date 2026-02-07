import { useState } from "react";
import SlDialog from '@shoelace-style/shoelace/dist/react/dialog';
import SlTextarea from '@shoelace-style/shoelace/dist/react/textarea';
import SlButton from '@shoelace-style/shoelace/dist/react/button';

import SlCopyButtonAdjust from './copy-button-adjust/SlCopyButtonAdjust.js';

const COLOR_TYPES = ["RGB", "Hex"]

export function ColorArray({colorOutRgb}) {
    const [visible, setVisible] = useState(false);
    const [colorType, setColorType] = useState('RGB')
    const [separator, setSeparator] = useState(',')
    
    function handleColorTypeChange(e) {
        setColorType(e.target.value)
    }

    let colorOutputString = ''; // RGB color codes
    if(colorType === "RGB") {
        colorOutRgb.map((tmp)=>{
            colorOutputString += (tmp[0]+separator+tmp[1]+separator+tmp[2]+'\n')
        })
    }
    if(colorType === "Hex") {
        colorOutRgb.map((tmp)=>{
            colorOutputString += (rgbToHex(tmp)+'\n')
        })
    }
    const tab = '\t'

    return (
        <>
            <SlButton size='small' onClick={() => setVisible(true)}>Color Array</SlButton>
            <SlDialog label='Color Array' open={visible}  onSlAfterHide={() => setVisible(false)} style={{'--width':'100%', textAlign: "left"}}>
                <SlCopyButtonAdjust
                    slot='header-actions'
                    value={colorOutputString}
                    style={{flex:"0 0 auto", display:"flex", alignItems:"center", fontSize:"var(--sl-font-size-medium)"}}>
                </SlCopyButtonAdjust>
                <div>
                    <label>output type: </label>
                    <select title='colortype' onChange={(e)=>handleColorTypeChange(e)}>
                        {COLOR_TYPES.map((colorType, i)=>{
                            return (
                                <option key={i}>{colorType}</option>
                                )
                            })}
                    </select>
                    <label>separator: </label>
                    <select title='separator' onChange={(e)=>setSeparator(e.target.value)}>
                        <option value=','>,</option>
                        <option value={tab}>tab</option>
                        <option value=' '>space</option>
                    </select>
                </div>
                <div style={{position: "relative"}}>
                    <SlTextarea className='code-area' value={colorOutputString} rows={colorOutRgb.length+1} cols={25} readOnly></SlTextarea>
                </div>
            </SlDialog>
        </>
    )
}

// Convert between color formats
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
}

function rgbToHex(rgb) {
    let red = (+rgb[0]).toString(16),
        green = (+rgb[1]).toString(16),
        blue = (+rgb[2]).toString(16);
  
    if (red.length == 1)
        red = "0" + red;
    if (green.length == 1)
        green = "0" + green;
    if (blue.length == 1)
        blue = "0" + blue;
  
    return "#" + red + green + blue;
}