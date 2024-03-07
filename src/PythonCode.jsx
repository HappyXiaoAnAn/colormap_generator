import './button.css'
import { useState, useRef, useEffect } from "react";

export function PythonCode({coloroutrgb}) {
    const [visible, setVisible] = useState(false);
    const python_code = output_function_for_matplotlib(coloroutrgb)

    const toggleText = () => {
        setVisible(prev => !prev);
    };

    return (
        <>
            {/* <button popovertarget="my-popover" className='button-85'><span>Python</span></button> */}
            <button className='button-85' onClick={toggleText}>
                <img src='https://matplotlib.org/stable/_static/logo_dark.svg' width={"100px"}/>
            </button>
            {
                visible && (<TextArea python_code={python_code} onClick={toggleText}/>)
            }
        </>
    )
}

// * reference::
//      https://medium.com/@shkim04/react-how-to-detect-click-outside-a-component-984fe2e003e8
function TextArea(props) {
    const wrapperRef = useRef();

    useEffect(() => {
      document.addEventListener('mousedown', handleClickListener);
      
      return () => {
        document.removeEventListener('mousedown', handleClickListener);
      };
    }, []);
  
    const handleClickListener = (event) => {
      let clickedInside;
      if(props.exceptionRef) {
        clickedInside = (wrapperRef && wrapperRef.current.contains(event.target)) || props.exceptionRef.current === event.target || props.exceptionRef.current.contains(event.target);
      }
      else {
        clickedInside = (wrapperRef && wrapperRef.current.contains(event.target));
      }
  
      if (clickedInside) return;
      else props.onClick();
    }

    return (
        <div ref={wrapperRef} className='popover'>
            <textarea value={props.python_code} style={{width: "500px", height: "200px"}} readOnly></textarea>
        </div>
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