import SlTextarea from '@shoelace-style/shoelace/dist/react/textarea';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/')

import SlCopyButtonAdjust from '../copy-button-adjust/SlCopyButtonAdjust.js';

export function PythonCode({colorOutRgb}) {
    const pythonCode = generateMatplotlibFunction(colorOutRgb)

    return (
        <>
            <div className="code-header">
                <span className="hint">Matplotlib <code>LinearSegmentedColormap</code></span>
                <SlCopyButtonAdjust value={pythonCode} />
            </div>
            <SlTextarea className='code-area' value={pythonCode} rows={15} readOnly></SlTextarea>
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
