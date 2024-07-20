import { useState } from 'react'
import { PythonCode } from './PythonCode'
import { ColorArray } from './ColorArray'

export function ColorOutputText({coloroutrgb}) {

    let color_str = ''; // RGB色碼
    coloroutrgb.map((tmp)=>{
        color_str += (tmp[0]+'\t'+tmp[1]+'\t'+tmp[2]+'\n')
    })

    return (
        <div className="txtarea">
            <div>
                <PythonCode coloroutrgb={coloroutrgb} />
                <ColorArray coloroutrgb={coloroutrgb}/>
            </div>
            <textarea value={color_str} rows={coloroutrgb.length+1}></textarea>
        </div>
    )
}