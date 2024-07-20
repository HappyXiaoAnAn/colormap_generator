import './button.css'
import { useState, useRef, useEffect } from "react";
import SlDialog from '@shoelace-style/shoelace/dist/react/dialog';
import SlButton from '@shoelace-style/shoelace/dist/react/button';
import SlTextarea from '@shoelace-style/shoelace/dist/react/textarea';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.14.0/cdn/')

import SlCopyButtonAdjust from './copy-button-adjust/SlCopyButtonAdjust.js';

export function PythonCode({coloroutrgb}) {
    const [visible, setVisible] = useState(false);
    const python_code = output_function_for_matplotlib(coloroutrgb)

    return (
        <>
            <SlButton size='small' onClick={() => setVisible(true)}>Python code</SlButton>
            {/* <button className='button-85' onClick={() => setVisible(true)}>
                <img src='https://matplotlib.org/stable/_static/logo_dark.svg' width={"100px"}/>
            </button> */}

            <SlDialog label='Python code' open={visible}  onSlAfterHide={() => setVisible(false)} style={{'--width':'100%', textAlign: "left"}}>
                <SlCopyButtonAdjust
                    slot='header-actions'
                    style={{flex:"0 0 auto", display:"flex", alignItems:"center", fontSize:"var(--sl-font-size-medium)"}}
                    value={python_code}>
                </SlCopyButtonAdjust>
                <SlTextarea className='code-area' value={python_code} rows={15} size='small' readOnly></SlTextarea>
            </SlDialog>
        </>
    )
}

function output_function_for_matplotlib(color_out_rgb) {
    let out_str = ''
    out_str+='def manual_cmap():\n'
    out_str+='    import numpy as np\n'
    out_str+='    from matplotlib.colors import LinearSegmentedColormap\n'
    out_str+='    colors = [\n'
    color_out_rgb.map((tmp)=>{
        out_str+=('        ['+tmp[0]+','+tmp[1]+','+tmp[2]+'],\n')
    })
    out_str+='    ]\n'
    out_str+='    return LinearSegmentedColormap.from_list("manual_cmap",np.array(colors)/255)\n'
    out_str+='# cmap = manual_cmap()'

    return out_str
}