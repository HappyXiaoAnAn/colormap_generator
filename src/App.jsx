import React from 'react'
import { useState } from 'react'
import {DefaultMaps} from "./DefaultMaps.jsx"
import { ColorOutputText } from './ColorOutputText.jsx'
import { PreviewColorbar } from './PreviewColorbar.jsx'
import './App.css'

import '@shoelace-style/shoelace/dist/themes/light.css';
import SlColorPicker from '@shoelace-style/shoelace/dist/react/color-picker';
import SlButton from '@shoelace-style/shoelace/dist/react/button'
import SlButtonGroup from '@shoelace-style/shoelace/dist/react/button-group'
import SlTooltip from '@shoelace-style/shoelace/dist/react/tooltip'
import SlIcon from '@shoelace-style/shoelace/dist/react/icon'


function ColorContainer() {
    const [history, setHistory] = useState([[[255,0,0],'','',[255,255,255],[0,0,255]]]);
    const [currentstate, setCurrentState] = useState(0);
    const [colormap, setcolormap] = useState([[255,0,0],'','',[255,255,255],[0,0,255]]);
    const [n_color_out, setncolorout] = useState(5)
    const [inputnum, setinputnum] = useState(5)
    
    function read_colormap_file(e) {
        var file = e.target.files[0];
        var fr = new FileReader();
        fr.onload=()=>{
            let arr_rgba = read_RGBA(fr.result);
            setcolormap(arr_rgba)
            setncolorout(arr_rgba.length);
            setinputnum(arr_rgba.length);
            addHistory(arr_rgba)
        }
        fr.readAsText(file);
    }
    function changeMap(e) {
        let cmapname = e.target.value;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', './colormap/'+cmapname+'.rgb');
        xhr.responseType = 'text';
        xhr.onload = ()=>{
            let arr_rgba = read_RGBA(xhr.response);
            setcolormap(arr_rgba)
            setncolorout(arr_rgba.length);
            setinputnum(arr_rgba.length);
            addHistory(arr_rgba)
        }
        xhr.send();
    }
    function addColor() {
        let colormap_tmp = [[255,255,255],...colormap]
        setcolormap(colormap_tmp)
        addHistory(colormap_tmp)
    }
    function addColorDown(i) {
        let colormap_tmp = [...colormap];
        colormap_tmp.splice(i+1,0,'');
        if(colormap_tmp[colormap_tmp.length-1]=='') colormap_tmp[colormap_tmp.length-1]=[255,255,255]; // make sure the last color is not null
        setcolormap(colormap_tmp)
        if (n_color_out < colormap_tmp.length) setncolorout(colormap_tmp.length);
        addHistory(colormap_tmp)
    }
    function delColor(i) {
        if(colormap.length==2) return;
        let colormap_tmp = [...colormap];
        colormap_tmp.splice(i,1);
        if(colormap_tmp[0]=='') colormap_tmp[0]=[255,255,255]; // make sure the first color is not null
        if(colormap_tmp[colormap_tmp.length-1]=='') colormap_tmp[colormap_tmp.length-1]=[255,255,255]; // make sure the last color is not null
        setcolormap(colormap_tmp)
        addHistory(colormap_tmp)
    }
    function changeColor(e,i) {
        let colormap_tmp = [...colormap];
        colormap_tmp.splice(i,1,e.target.getFormattedValue('rgb').substr(4).split(")")[0].split(",").map((str)=>{return parseInt(str)}));
        if(colormap_tmp[0]=='') colormap_tmp[0]=[255,255,255]; // make sure the first color is not null
        if(colormap_tmp[colormap_tmp.length-1]=='') colormap_tmp[colormap_tmp.length-1]=[255,255,255]; // make sure the last color is not null
        setcolormap(colormap_tmp)
    }
    function setBlankColor(i) {
        if(i===0) return; // make sure the first color is not null
        if(i===colormap.length-1) return; // make sure the first color is not null
        let colormap_tmp = [...colormap];
        colormap_tmp.splice(i,1,'');
        setcolormap(colormap_tmp)
        addHistory(colormap_tmp)
    }
    function swapUp(i) {
        if(i==0) return;
        let colormap_tmp = [...colormap];
        colormap_tmp[i-1] = colormap_tmp.splice(i,1,colormap_tmp[i-1])[0];
        if(colormap_tmp[0]=='') colormap_tmp[0]=[255,255,255]; // make sure the first color is not null
        if(colormap_tmp[colormap_tmp.length-1]=='') colormap_tmp[colormap_tmp.length-1]=[255,255,255]; // make sure the last color is not null
        setcolormap(colormap_tmp)
        addHistory(colormap_tmp)
    }
    function swapDown(i) {
        if(i===colormap.length-1) return;
        let colormap_tmp = [...colormap];
        colormap_tmp[i+1] = colormap_tmp.splice(i,1,colormap_tmp[i+1])[0];
        if(colormap_tmp[0]=='') colormap_tmp[0]=[255,255,255]; // make sure the first color is not null
        if(colormap_tmp[colormap_tmp.length-1]=='') colormap_tmp[colormap_tmp.length-1]=[255,255,255]; // make sure the last color is not null
        setcolormap(colormap_tmp)
        addHistory(colormap_tmp)
    }
    function changeOutNum(e) {
        const n_color_out = (e.target.value < colormap.length) ? inputnum : e.target.value;
        setinputnum(e.target.value);
        setncolorout(n_color_out);
    }
    function resetOutNum(e) {
        setinputnum(colormap.length);
        setncolorout(colormap.length);
    }
    function handleBlur(e) {
        const n_color_out = (e.target.value < colormap.length) ? colormap.length : e.target.value;
        setinputnum(n_color_out);
        setncolorout(n_color_out);
    }
    function addHistory(colormap_tmp) {
        const nextHistory = [...history.slice(0, currentstate + 1), colormap_tmp];
        setHistory(nextHistory);
        setCurrentState(nextHistory.length-1)
    }
    function handleSlBlur() {
        let colormap_tmp = [...colormap];
        addHistory(colormap_tmp)
    }
    function undo() {
        if(currentstate==0) return;
        let colormap_tmp = history[currentstate-1];
        setcolormap(colormap_tmp);
        setCurrentState(currentstate-1)
    }
    function redo() {
        if(currentstate==history.length-1) return;
        let colormap_tmp = history[currentstate+1];
        setcolormap(colormap_tmp);
        setCurrentState(currentstate+1)
    }
    
    const colors = colormap.map((color,i) => {
        return (
            <ColorSelector
                key={i}
                rgb={color}
                rank={i+1}
                setBlankColor={()=>setBlankColor(i)}
                swapUp={()=>swapUp(i)}
                swapDown={()=>swapDown(i)}
                changeColor={(e)=>changeColor(e,i)}
                addColorDown={()=>addColorDown(i)}
                delColor={()=>delColor(i)}
                handleSlBlur={handleSlBlur}
                colorid={i}
                ncolor={colormap.length}
            />
        )
    })
    const color_in_rgb = colormap;
    const color_out_rgb = interpolate(color_in_rgb, n_color_out)
    
    return (
        <>
            <PreviewColorbar color_out_rgb={color_out_rgb}/>
            <SlButtonGroup>
                <SlTooltip content="Undo"><SlButton size='small' onClick={undo} disabled={currentstate==0}>↶</SlButton></SlTooltip>
                <SlTooltip content="Redo"><SlButton size='small' onClick={redo} disabled={currentstate==history.length-1}>↷</SlButton></SlTooltip>
            </SlButtonGroup>
            <br></br>
            <input
                type="file"
                accept=".rgb"
                onChange={(e)=>{read_colormap_file(e)}}
            ></input>
            <DefaultMaps changeMap={(e)=>changeMap(e)} />
            <hr></hr>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <div className="selector">
                    <label>n_colors: </label>
                    <input type='number' step='1' value={inputnum} onChange={(e)=>changeOutNum(e)} onBlur={(e)=>handleBlur(e)} style={{width: '3em'}}></input>
                    <SlButtonGroup>
                    <SlTooltip content="reset"><SlButton size='small' onClick={resetOutNum} title='reset'><SlIcon name="arrow-repeat"></SlIcon></SlButton></SlTooltip>
                    <SlTooltip content="add color down"><SlButton size='small' onClick={addColor} title='add color down'><SlIcon name="plus-square-fill"></SlIcon></SlButton></SlTooltip>
                    </SlButtonGroup>
                    {colors}
                </div>
                <ColorOutputText
                    colorinrgb={color_in_rgb}
                    coloroutrgb={color_out_rgb}
                    setcolormap={setcolormap}
                    addHistory={addHistory}/>
            </div>
        </>
    );
} // ColorContainer

// 色塊
function ColorSelector(props) {
    return (
        <div style={{flex: "0 0 auto", display: "flex", alignItems:"center", padding:"1px"}}>
            <span style={{display: "inline-block", width: "2em"}}>{props.rank}.</span>
            {/* <input type="color" value={props.hex} onChange={(e,i)=>props.changeColor(e,i)} style={{width: "5em"}}></input> */}
            <SlColorPicker size='small'
                value={props.rgb=='' ? '' : 'rgb('+props.rgb[0]+','+props.rgb[1]+','+props.rgb[2]+')'}
                // format="rgb"
                onSlInput={(e,i)=>props.changeColor(e,i)} 
                onSlBlur={props.handleSlBlur}
            />
            <SlButtonGroup>
                <SlTooltip content="set color to blank">
                    <SlButton size="small" onClick={(i)=>props.setBlankColor(i)} disabled={props.colorid==0 || props.colorid==props.ncolor-1}>#</SlButton>
                </SlTooltip>
                <SlTooltip content="swap up">
                    <SlButton size="small" onClick={(i)=>props.swapUp(i)} disabled={props.colorid==0}>▲</SlButton>
                </SlTooltip>
                <SlTooltip content="swap down">
                    <SlButton size="small" onClick={(i)=>props.swapDown(i)} disabled={props.colorid==props.ncolor-1}>▼</SlButton>
                </SlTooltip>
                <SlTooltip content="add color down">
                    <SlButton size="small" onClick={(i)=>props.addColorDown(i)}><SlIcon name="plus-square-fill"></SlIcon></SlButton>
                </SlTooltip>
                <SlTooltip content="delete color">
                    <SlButton size="small" onClick={(i)=>props.delColor(i)}>X</SlButton>
                </SlTooltip>
            </SlButtonGroup>
            <br></br>
        </div>
    );
} // ColorSelector

// 內插顏色
function interpolate(arr, n_color_out) {
    // console.log(nn,a,b)
    const n_color_in = arr.length;
    n_color_out = Math.max(n_color_out,n_color_in);
    const color_gcd = findGCD([n_color_in-1,n_color_out-1]);
    const nn = lcm(n_color_out-1,n_color_in-1)+1;
    const a = (n_color_in-1)/color_gcd;
    const b = (n_color_out-1)/color_gcd
    const tmp = [];
    const result = [];
    
    var color_left = 0;
    for (let j = 0; j < arr.length-1; j++) {
        if(!arr[j+1]) continue;
        var delta = 1/b/(j-color_left+1); // 計算間隔
        for (let i = 0; i < b*(j-color_left+1); i++) {
            const rr = arr[color_left][0]+(arr[j+1][0]-arr[color_left][0])*delta*i;
            const gg = arr[color_left][1]+(arr[j+1][1]-arr[color_left][1])*delta*i;
            const bb = arr[color_left][2]+(arr[j+1][2]-arr[color_left][2])*delta*i;
            tmp.push([parseInt(rr),parseInt(gg),parseInt(bb)])
        }
        color_left = j+1;
    }
    tmp.push(arr[arr.length-1]);
    for (let i = 0; i < nn; i=i+a) {
        result.push(tmp[i]);
    }
    return result;
}
var gcd = (x, y) => !y ? x : gcd(y, x % y);
// 最小公倍數
var lcm = (a, b) => (a / gcd(a, b)) * b;
// 最大公因數
var findGCD = (nums) => gcd(  Math.max(...nums), Math.min(...nums)  );

function read_RGBA(content) {
    const lines = content.split('\n');
    const MAXCOLORS = 1000;
    const tmpCmap = [];
    // const tmpCmap = new Array(MAXCOLORS).fill(null).map(() => [0.0, 0.0, 0.0, 0.0]);
    let numColors = 0;
    let maxValue = -1.0;

    function isNumerical(s) {
        return !isNaN(parseFloat(s)) && isFinite(s);
    }

    for (let i = 0; i < lines.length && numColors < MAXCOLORS; i++) {
        let line = lines[i].trim();
        if (line.length === 0) {
            line = "#"; // Zero-lengthed lines cause issues
        }
        const tokens = line.split(/\s+/);
        if (tokens.length >= 3) {
            let red = -1.0;
            let green = -1.0;
            let blue = -1.0;
            if (isNumerical(tokens[0])) {
                red = parseFloat(tokens[0]);
            }
            if (isNumerical(tokens[1])) {
                green = parseFloat(tokens[1]);
            }
            if (isNumerical(tokens[2])) {
                blue = parseFloat(tokens[2]);
            }
            let alpha = -1.0;
            if (tokens.length > 3 && isNumerical(tokens[3])) {
                alpha = parseFloat(tokens[3]);
            }
            if (red >= 0 && green >= 0 && blue >= 0) {
                let tmpRGBA = [red, green, blue, alpha];
                tmpCmap.push(tmpRGBA);
                // tmpCmap[numColors][0] = red;
                // tmpCmap[numColors][1] = green;
                // tmpCmap[numColors][2] = blue;
                // tmpCmap[numColors][3] = alpha;
                numColors++;
                if (red > maxValue) {
                    maxValue = red;
                }
                if (green > maxValue) {
                    maxValue = green;
                }
                if (blue > maxValue) {
                    maxValue = blue;
                }
            }
        }
    }

    const cmap = new Array(numColors).fill(null).map(() => [0.0, 0.0, 0.0, 0.0]);
    for (let i = 0; i < numColors; i++) {
        cmap[i] = tmpCmap[i];
    }

    if (maxValue <= 1) {
        for (let i = 0; i < numColors; i++) {
            cmap[i][3] = cmap[i][3] < 0 ? 1.0 : cmap[i][3];
            for (let j = 0; j < 3; j++) {
                cmap[i][j] *= 255.0;
            }
        }
    } else if (maxValue < 256) {
        for (let i = 0; i < numColors; i++) {
            cmap[i][3] = cmap[i][3] < 0 ? 255.0 : cmap[i][3];
            // for (let j = 0; j < 3; j++) {
            //     cmap[i][j] /= 255.0;
            // }
        }
    } else {
        for (let i = 0; i < numColors; i++) {
            cmap[i][3] = cmap[i][3] < 0 ? maxValue : cmap[i][3];
            for (let j = 0; j < 3; j++) {
                cmap[i][j] /= maxValue;
                cmap[i][j] *= 255.0;
            }
        }
    }

    // round rgb number to integer
    for (let i = 0; i < numColors; i++) {
        for (let j = 0; j < 3; j++) {
            cmap[i][j] = Math.round(cmap[i][j]);
        }
    }
    
    return cmap;
}

export default ColorContainer