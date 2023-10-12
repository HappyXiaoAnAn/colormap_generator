import { useState } from 'react'

const colortypes = ["RGB", "Hex"]

export function ColorOutputText(props) {    
    const [colortype, setcolortype] = useState('RGB')
    
    function changeColorType(e) {
        setcolortype(e.target.value)
    }

    let color_out_rgb_str = ''; // RGB色碼
    if(colortype === "RGB") {
        props.coloroutrgb.map((tmp)=>{
            color_out_rgb_str += (tmp[0]+'\t'+tmp[1]+'\t'+tmp[2]+'\n')
        })
    }
    if(colortype === "Hex") {
        props.coloroutrgb.map((tmp)=>{
            color_out_rgb_str += (RGBToHex(tmp)+'\n')
        })
    }
    
    return (
        <div className="txtarea">
            <div><label>output type: 
            <select title='colortype' onChange={(e)=>changeColorType(e)}>
                {colortypes.map((colortype, i)=>{
                    return (
                        <option key={i}>{colortype}</option>
                    )
                })}
            </select></label></div>
            <textarea value={color_out_rgb_str} rows={props.coloroutrgb.length+1} cols={25} readOnly style={{resize: 'none'}}></textarea>
        </div>
    )
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