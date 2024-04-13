import './button.css'
import { useState, useRef, useEffect } from "react";
import SlDialog from '@shoelace-style/shoelace/dist/react/dialog';
import SlTextarea from '@shoelace-style/shoelace/dist/react/textarea';

export function PythonCode({coloroutrgb}) {
    const [visible, setVisible] = useState(false);
    const python_code = output_function_for_matplotlib(coloroutrgb)

    return (
        <>
            {/* <button popovertarget="my-popover" className='button-85'><span>Python</span></button> */}
            <button className='button-85' onClick={() => setVisible(true)}>
                <img src='https://matplotlib.org/stable/_static/logo_dark.svg' width={"100px"}/>
            </button>
            
            <SlDialog label='Python code' open={visible}  onSlAfterHide={() => setVisible(false)} style={{'--width':'100%', textAlign: "left"}}>
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