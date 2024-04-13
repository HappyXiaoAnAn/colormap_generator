import { useState } from 'react'
import { PythonCode } from './PythonCode'

const colortypes = ["RGB", "Hex"]

export function ColorOutputText({coloroutrgb}) {    
    const [colortype, setcolortype] = useState('RGB')
    
    function changeColorType(e) {
        setcolortype(e.target.value)
    }

    let color_out_rgb_str = ''; // RGB色碼
    if(colortype === "RGB") {
        coloroutrgb.map((tmp)=>{
            color_out_rgb_str += (tmp[0]+'\t'+tmp[1]+'\t'+tmp[2]+'\n')
        })
    }
    if(colortype === "Hex") {
        coloroutrgb.map((tmp)=>{
            color_out_rgb_str += (RGBToHex(tmp)+'\n')
        })
    }

    return (
        <div className="txtarea">
            <div>
                <PythonCode coloroutrgb={coloroutrgb} />
            </div>
            <div>
                <label>output type: </label>
                <select title='colortype' onChange={(e)=>changeColorType(e)}>
                    {colortypes.map((colortype, i)=>{
                        return (
                            <option key={i}>{colortype}</option>
                            )
                        })}
                </select>
            </div>

            <textarea value={color_out_rgb_str} rows={coloroutrgb.length+1} cols={25} readOnly style={{resize: 'none'}}></textarea>
        </div>
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