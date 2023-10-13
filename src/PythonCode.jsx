import './button.css'

export function PythonCode({coloroutrgb}) {
    const python_code = output_function_for_matplotlib(coloroutrgb)
    return (
        <>
            <button popovertarget="my-popover" className='button-64'><span>Python</span></button>
            <div popover="auto" id="my-popover">
                <textarea value={python_code} style={{width: "500px", height: "200px"}} readOnly></textarea>
            </div>
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