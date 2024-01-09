import React from 'react'
import { useState } from 'react'
import {DefaultMaps} from "./DefaultMaps.jsx"
import { ColorOutputText } from './ColorOutputText.jsx'
import './App.css'

import '@shoelace-style/shoelace/dist/themes/light.css';
import SlColorPicker from '@shoelace-style/shoelace/dist/react/color-picker';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function ColorContainer() {
    const [colormap, setcolormap] = useState(['#ff0000','','','#ffffff','#0000ff']);
    const [n_color_out, setncolorout] = useState(5)
    
    function read_colormap_file(e) {
        var file = e.target.files[0];
        var fr = new FileReader();
        fr.onload=()=>{
            let arr_rgba = read_RGBA(fr.result);
            setcolormap(arr_rgba.map((rgb)=>{return RGBToHex(rgb)}))
            setncolorout(arr_rgba.length);
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
            setcolormap(arr_rgba.map((rgb)=>{return RGBToHex(rgb)}))
            setncolorout(arr_rgba.length);
        }
        xhr.send();
    }
    function addColor() {
        setcolormap(colormap => {
            return ['#ffffff',...colormap]
        })
    }
    function addColorDown(i) {
        let colormap_tmp = [...colormap];
        colormap_tmp.splice(i+1,0,'');
        if(colormap_tmp[colormap_tmp.length-1]=='') colormap_tmp[colormap_tmp.length-1]='#ffffff'; // make sure the last color is not null
        setcolormap(colormap_tmp)
        if (n_color_out < colormap_tmp.length) setncolorout(colormap_tmp.length);
    }
    function delColor(i) {
        if(colormap.length==2) return;
        let colormap_tmp = [...colormap];
        colormap_tmp.splice(i,1);
        if(colormap_tmp[0]=='') colormap_tmp[0]='#ffffff'; // make sure the first color is not null
        if(colormap_tmp[colormap_tmp.length-1]=='') colormap_tmp[colormap_tmp.length-1]='#ffffff'; // make sure the last color is not null
        setcolormap(colormap_tmp)
    }
    function changeColor(e,i) {
        let colormap_tmp = [...colormap];
        colormap_tmp.splice(i,1,e.target.value);
        if(colormap_tmp[0]=='') colormap_tmp[0]='#ffffff'; // make sure the first color is not null
        if(colormap_tmp[colormap_tmp.length-1]=='') colormap_tmp[colormap_tmp.length-1]='#ffffff'; // make sure the last color is not null
        setcolormap(colormap_tmp)
    }
    function setBlankColor(i) {
        if(i===0) return; // make sure the first color is not null
        if(i===colormap.length-1) return; // make sure the first color is not null
        let colormap_tmp = [...colormap];
        colormap_tmp.splice(i,1,'');
        setcolormap(colormap_tmp)
    }
    function swapUp(i) {
        if(i==0) return;
        let colormap_tmp = [...colormap];
        colormap_tmp[i-1] = colormap_tmp.splice(i,1,colormap_tmp[i-1])[0];
        if(colormap_tmp[0]=='') colormap_tmp[0]='#ffffff'; // make sure the first color is not null
        if(colormap_tmp[colormap_tmp.length-1]=='') colormap_tmp[colormap_tmp.length-1]='#ffffff'; // make sure the last color is not null
        setcolormap(colormap_tmp)
    }
    function swapDown(i) {
        if(i===colormap.length-1) return;
        let colormap_tmp = [...colormap];
        colormap_tmp[i+1] = colormap_tmp.splice(i,1,colormap_tmp[i+1])[0];
        if(colormap_tmp[0]=='') colormap_tmp[0]='#ffffff'; // make sure the first color is not null
        if(colormap_tmp[colormap_tmp.length-1]=='') colormap_tmp[colormap_tmp.length-1]='#ffffff'; // make sure the last color is not null
        setcolormap(colormap_tmp)
    }
    function changeOutNum(e) {
        const n_color_out = (e.target.value < colormap.length) ? colormap.length : e.target.value;
        e.target.value = n_color_out;
        setncolorout(n_color_out);
    }
    
    const colors = colormap.map((color,i) => {
        return (
            <ColorSelector
                key={i}
                hex={color}
                rank={i+1}
                setBlankColor={()=>setBlankColor(i)}
                swapUp={()=>swapUp(i)}
                swapDown={()=>swapDown(i)}
                changeColor={(e)=>changeColor(e,i)}
                addColorDown={()=>addColorDown(i)}
                delColor={()=>delColor(i)}
            />
        )
    })
    const color_in_rgb = colormap.map(tmp=>hexToRgb(tmp))
    const color_out_rgb = interpolate(color_in_rgb, n_color_out)
    Draw(color_out_rgb); // 畫colorbar
    return (
        <>
            <input
                type="file"
                accept=".rgb"
                onChange={(e)=>{read_colormap_file(e)}}
            ></input>
            <DefaultMaps changeMap={(e)=>changeMap(e)} />
            <hr></hr>
            <div>
                <div className="selector">
                    <label>n_output colors: </label>
                    <input type='number' step='1' value={n_color_out} onChange={(e)=>{changeOutNum(e)}} style={{width: '3em'}}></input>
                    <button className="adjust_btn" onClick={addColor}>▼</button><br></br>
                    {colors}
                </div>
                <ColorOutputText coloroutrgb={color_out_rgb}/>
            </div>
        </>
    );
} // ColorContainer

// 色塊
function ColorSelector(props) {
    return (
        <>
            <span style={{display: "inline-block", width: "3em"}}>{props.rank}. </span>
            {/* <input type="color" value={props.hex} onChange={(e,i)=>props.changeColor(e,i)} style={{width: "5em"}}></input> */}
            <SlColorPicker className='colorpicker' value={props.hex} onSlChange={(e,i)=>props.changeColor(e,i)} />
            <button className="adjust_btn" onClick={(i)=>props.setBlankColor(i)}>#</button>
            <button className="adjust_btn" onClick={(i)=>props.swapUp(i)}>↑</button>
            <button className="adjust_btn" onClick={(i)=>props.swapDown(i)}>↓</button>
            <button className="adjust_btn" onClick={(i)=>props.addColorDown(i)}>▼</button>
            <button className="adjust_btn" onClick={(i)=>props.delColor(i)}>X</button>
            <br></br>
        </>
    );
} // ColorSelector

// 畫colorbar
function Draw(color_out) {
    ctx.clearRect(0,0,500,100);
    ctx.beginPath();
    ctx.rect(50, 30, 400, 40);
    ctx.stroke();
    
    for (let i = 0; i < color_out.length; i++) {
        const color_str = 'rgb('+color_out[i][0]+','+color_out[i][1]+','+color_out[i][2]+')';
        const px = 50+i*400/color_out.length;
        DrawRect(color_str,px, 30, 400/color_out.length, 40);
    }
}
// 畫colorbar色塊
function DrawRect(color, x, y, width, height) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}
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
// 色碼轉換
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
}
var gcd = (x, y) => !y ? x : gcd(y, x % y);
// 最小公倍數
var lcm = (a, b) => (a / gcd(a, b)) * b;
// 最大公因數
var findGCD = (nums) => gcd(  Math.max(...nums), Math.min(...nums)  );

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