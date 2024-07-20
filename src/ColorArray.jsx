import { useState } from "react";
import SlDialog from '@shoelace-style/shoelace/dist/react/dialog';
import SlTextarea from '@shoelace-style/shoelace/dist/react/textarea';
import SlButton from '@shoelace-style/shoelace/dist/react/button';

import SlCopyButtonAdjust from './copy-button-adjust/SlCopyButtonAdjust.js';

const colortypes = ["RGB", "Hex"]

export function ColorArray({coloroutrgb}) {
    const [visible, setVisible] = useState(false);
    const [colortype, setcolortype] = useState('RGB')
    const [sep, setsep] = useState(',')
    
    function changeColorType(e) {
        setcolortype(e.target.value)
    }

    let color_out_rgb_str = ''; // RGB色碼
    if(colortype === "RGB") {
        coloroutrgb.map((tmp)=>{
            color_out_rgb_str += (tmp[0]+sep+tmp[1]+sep+tmp[2]+'\n')
        })
    }
    if(colortype === "Hex") {
        coloroutrgb.map((tmp)=>{
            color_out_rgb_str += (RGBToHex(tmp)+'\n')
        })
    }
    const tab = '\t'

    return (
        <>
            <SlButton size='small' onClick={() => setVisible(true)}>Color Array</SlButton>
            <SlDialog label='Color Array' open={visible}  onSlAfterHide={() => setVisible(false)} style={{'--width':'100%', textAlign: "left"}}>
                <SlCopyButtonAdjust
                    slot='header-actions'
                    value={color_out_rgb_str}
                    style={{flex:"0 0 auto", display:"flex", alignItems:"center", fontSize:"var(--sl-font-size-medium)"}}>
                </SlCopyButtonAdjust>
                <div>
                    <label>output type: </label>
                    <select title='colortype' onChange={(e)=>changeColorType(e)}>
                        {colortypes.map((colortype, i)=>{
                            return (
                                <option key={i}>{colortype}</option>
                                )
                            })}
                    </select>
                    <label>separator: </label>
                    <select title='separator' onChange={(e)=>setsep(e.target.value)}>
                        <option value=','>,</option>
                        <option value={tab}>tab</option>
                        <option value=' '>space</option>
                    </select>
                </div>
                <div style={{position: "relative"}}>
                    <SlTextarea className='code-area' value={color_out_rgb_str} rows={coloroutrgb.length+1} cols={25} readOnly></SlTextarea>
                </div>
            </SlDialog>
        </>
    )
}
// 色碼轉換
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
}
function RGBToHex(rgb) {
    // Choose correct separator
    // let sep = rgb.indexOf(",") > -1 ? "," : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
    // rgb = inp.trim().split(/\s+/);
    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
}