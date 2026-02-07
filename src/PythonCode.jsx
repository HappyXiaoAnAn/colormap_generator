import './button.css'
import { useState, useRef, useEffect } from "react";
import SlDialog from '@shoelace-style/shoelace/dist/react/dialog';
import SlButton from '@shoelace-style/shoelace/dist/react/button';
import SlTextarea from '@shoelace-style/shoelace/dist/react/textarea';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.14.0/cdn/')

import SlCopyButtonAdjust from './copy-button-adjust/SlCopyButtonAdjust.js';

export function PythonCode({colorOutRgb}) {
    const [visible, setVisible] = useState(false);
    const pythonCode = generateMatplotlibFunction(colorOutRgb)

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
                    value={pythonCode}>
                </SlCopyButtonAdjust>
                <SlTextarea className='code-area' value={pythonCode} rows={15} size='small' readOnly></SlTextarea>
            </SlDialog>
        </>
    )
}

function generateMatplotlibFunction(colorOutRgb) {
    let outputString = ''
    outputString+='def manual_cmap():\n'
    outputString+='    import numpy as np\n'
    outputString+='    from matplotlib.colors import LinearSegmentedColormap\n'
    outputString+='    colors = [\n'
    colorOutRgb.map((tmp)=>{
        outputString+=('        ['+tmp[0]+','+tmp[1]+','+tmp[2]+'],\n')
    })
    outputString+='    ]\n'
    outputString+='    return LinearSegmentedColormap.from_list("manual_cmap",np.array(colors)/255)\n'
    outputString+='# cmap = manual_cmap()'

    return outputString
}