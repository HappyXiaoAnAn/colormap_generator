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
    const [currentState, setCurrentState] = useState(0);
    const [colormap, setColormap] = useState([[255,0,0],'','',[255,255,255],[0,0,255]]);
    const [numColorsOut, setNumColorsOut] = useState(5)
    const [inputNum, setInputNum] = useState(5)
    
    function handleColormapFileRead(e) {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onload=()=>{
            const colormapData = parseRGBAData(fileReader.result);
            setColormap(colormapData)
            setNumColorsOut(colormapData.length);
            setInputNum(colormapData.length);
            addHistory(colormapData)
        }
        fileReader.readAsText(file);
    }
    function handleMapChange(e) {
        const mapName = e.target.value;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', './colormap/'+mapName+'.rgb');
        xhr.responseType = 'text';
        xhr.onload = ()=>{
            const colormapData = parseRGBAData(xhr.response);
            setColormap(colormapData)
            setNumColorsOut(colormapData.length);
            setInputNum(colormapData.length);
            addHistory(colormapData)
        }
        xhr.send();
    }
    function handleAddColor() {
        const updatedColormap = [[255,255,255],...colormap]
        setColormap(updatedColormap)
        addHistory(updatedColormap)
    }
    function handleAddColorDown(i) {
        const updatedColormap = [...colormap];
        updatedColormap.splice(i+1,0,'');
        if(updatedColormap[updatedColormap.length-1]=='') updatedColormap[updatedColormap.length-1]=[255,255,255]; // Ensure last color is not null
        setColormap(updatedColormap)
        if (numColorsOut < updatedColormap.length) setNumColorsOut(updatedColormap.length);
        addHistory(updatedColormap)
    }
    function handleDeleteColor(i) {
        if(colormap.length==2) return;
        const updatedColormap = [...colormap];
        updatedColormap.splice(i,1);
        if(updatedColormap[0]=='') updatedColormap[0]=[255,255,255]; // Ensure first color is not null
        if(updatedColormap[updatedColormap.length-1]=='') updatedColormap[updatedColormap.length-1]=[255,255,255]; // Ensure last color is not null
        setColormap(updatedColormap)
        addHistory(updatedColormap)
    }
    function handleColorChange(e,i) {
        const updatedColormap = [...colormap];
        updatedColormap.splice(i,1,e.target.getFormattedValue('rgb').substr(4).split(")")[0].split(",").map((str)=>{return parseInt(str)}));
        if(updatedColormap[0]=='') updatedColormap[0]=[255,255,255]; // Ensure first color is not null
        if(updatedColormap[updatedColormap.length-1]=='') updatedColormap[updatedColormap.length-1]=[255,255,255]; // Ensure last color is not null
        setColormap(updatedColormap)
    }
    function handleSetBlankColor(i) {
        if(i===0) return; // Ensure first color is not null
        if(i===colormap.length-1) return; // Ensure last color is not null
        const updatedColormap = [...colormap];
        updatedColormap.splice(i,1,'');
        setColormap(updatedColormap)
        addHistory(updatedColormap)
    }
    function handleSwapUp(i) {
        if(i==0) return;
        const updatedColormap = [...colormap];
        updatedColormap[i-1] = updatedColormap.splice(i,1,updatedColormap[i-1])[0];
        if(updatedColormap[0]=='') updatedColormap[0]=[255,255,255]; // Ensure first color is not null
        if(updatedColormap[updatedColormap.length-1]=='') updatedColormap[updatedColormap.length-1]=[255,255,255]; // Ensure last color is not null
        setColormap(updatedColormap)
        addHistory(updatedColormap)
    }
    function handleSwapDown(i) {
        if(i===colormap.length-1) return;
        const updatedColormap = [...colormap];
        updatedColormap[i+1] = updatedColormap.splice(i,1,updatedColormap[i+1])[0];
        if(updatedColormap[0]=='') updatedColormap[0]=[255,255,255]; // Ensure first color is not null
        if(updatedColormap[updatedColormap.length-1]=='') updatedColormap[updatedColormap.length-1]=[255,255,255]; // Ensure last color is not null
        setColormap(updatedColormap)
        addHistory(updatedColormap)
    }
    function handleNumColorsChange(e) {
        const numColors = (e.target.value < colormap.length) ? inputNum : e.target.value;
        setInputNum(e.target.value);
        setNumColorsOut(numColors);
    }
    function handleResetNumColors(e) {
        setInputNum(colormap.length);
        setNumColorsOut(colormap.length);
    }
    function handleNumColorsBlur(e) {
        const numColors = (e.target.value < colormap.length) ? colormap.length : e.target.value;
        setInputNum(numColors);
        setNumColorsOut(numColors);
    }
    function addHistory(colormapData) {
        const nextHistory = [...history.slice(0, currentState + 1), colormapData];
        setHistory(nextHistory);
        setCurrentState(nextHistory.length-1)
    }
    function handleColorPickerBlur() {
        const updatedColormap = [...colormap];
        addHistory(updatedColormap)
    }
    function handleUndo() {
        if(currentState==0) return;
        const previousColormap = history[currentState-1];
        setColormap(previousColormap);
        setCurrentState(currentState-1)
    }
    function handleRedo() {
        if(currentState==history.length-1) return;
        const nextColormap = history[currentState+1];
        setColormap(nextColormap);
        setCurrentState(currentState+1)
    }
    
    const colors = colormap.map((color,i) => {
        return (
            <ColorSelector
                key={i}
                rgb={color}
                rank={i+1}
                setBlankColor={()=>handleSetBlankColor(i)}
                swapUp={()=>handleSwapUp(i)}
                swapDown={()=>handleSwapDown(i)}
                changeColor={(e)=>handleColorChange(e,i)}
                addColorDown={()=>handleAddColorDown(i)}
                delColor={()=>handleDeleteColor(i)}
                handleSlBlur={handleColorPickerBlur}
                colorId={i}
                numColors={colormap.length}
            />
        )
    })
    const colorInRgb = colormap;
    const colorOutRgb = interpolateColors(colorInRgb, numColorsOut)
    
    return (
        <>
            <PreviewColorbar colorOutRgb={colorOutRgb}/>
            <SlButtonGroup>
                <SlTooltip content="Undo"><SlButton size='small' onClick={handleUndo} disabled={currentState==0}>↶</SlButton></SlTooltip>
                <SlTooltip content="Redo"><SlButton size='small' onClick={handleRedo} disabled={currentState==history.length-1}>↷</SlButton></SlTooltip>
            </SlButtonGroup>
            <br></br>
            <input
                type="file"
                accept=".rgb"
                onChange={(e)=>{handleColormapFileRead(e)}}
            ></input>
            <DefaultMaps changeMap={(e)=>handleMapChange(e)} />
            <hr></hr>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <div className="selector">
                    <label>n_colors: </label>
                    <input type='number' step='1' value={inputNum} onChange={(e)=>handleNumColorsChange(e)} onBlur={(e)=>handleNumColorsBlur(e)} style={{width: '3em'}}></input>
                    <SlButtonGroup>
                    <SlTooltip content="reset"><SlButton size='small' onClick={handleResetNumColors} title='reset'><SlIcon name="arrow-repeat"></SlIcon></SlButton></SlTooltip>
                    <SlTooltip content="add color down"><SlButton size='small' onClick={handleAddColor} title='add color down'><SlIcon name="plus-square-fill"></SlIcon></SlButton></SlTooltip>
                    </SlButtonGroup>
                    {colors}
                </div>
                <ColorOutputText
                    colorInRgb={colorInRgb}
                    colorOutRgb={colorOutRgb}
                    setColormap={setColormap}
                    addHistory={addHistory}/>
            </div>
        </>
    );
} // ColorContainer

// Color selector component
function ColorSelector(props) {
    return (
        <div style={{flex: "0 0 auto", display: "flex", alignItems:"center", padding:"1px"}}>
            <span style={{display: "inline-block", width: "2em"}}>{props.rank}.</span>
            <SlColorPicker size='small'
                value={props.rgb=='' ? '' : 'rgb('+props.rgb[0]+','+props.rgb[1]+','+props.rgb[2]+')'}
                onSlInput={(e,i)=>props.changeColor(e,i)} 
                onSlBlur={props.handleSlBlur}
            />
            <SlButtonGroup>
                <SlTooltip content="set color to blank">
                    <SlButton size="small" onClick={(i)=>props.setBlankColor(i)} disabled={props.colorId==0 || props.colorId==props.numColors-1}>#</SlButton>
                </SlTooltip>
                <SlTooltip content="swap up">
                    <SlButton size="small" onClick={(i)=>props.swapUp(i)} disabled={props.colorId==0}>▲</SlButton>
                </SlTooltip>
                <SlTooltip content="swap down">
                    <SlButton size="small" onClick={(i)=>props.swapDown(i)} disabled={props.colorId==props.numColors-1}>▼</SlButton>
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

// Interpolate colors between control points
function interpolateColors(colorArray, numColorsOut) {
    const numColorsIn = colorArray.length;
    numColorsOut = Math.max(numColorsOut, numColorsIn);
    const colorGcd = findGCD([numColorsIn-1, numColorsOut-1]);
    const totalPoints = lcm(numColorsOut-1, numColorsIn-1)+1;
    const stepA = (numColorsIn-1)/colorGcd;
    const stepB = (numColorsOut-1)/colorGcd
    const tempColors = [];
    const result = [];
    
    let leftColorIdx = 0;
    for (let j = 0; j < colorArray.length-1; j++) {
        if(!colorArray[j+1]) continue;
        const delta = 1/stepB/(j-leftColorIdx+1); // Calculate interval
        for (let i = 0; i < stepB*(j-leftColorIdx+1); i++) {
            const red = colorArray[leftColorIdx][0]+(colorArray[j+1][0]-colorArray[leftColorIdx][0])*delta*i;
            const green = colorArray[leftColorIdx][1]+(colorArray[j+1][1]-colorArray[leftColorIdx][1])*delta*i;
            const blue = colorArray[leftColorIdx][2]+(colorArray[j+1][2]-colorArray[leftColorIdx][2])*delta*i;
            tempColors.push([parseInt(red),parseInt(green),parseInt(blue)])
        }
        leftColorIdx = j+1;
    }
    tempColors.push(colorArray[colorArray.length-1]);
    for (let i = 0; i < totalPoints; i=i+stepA) {
        result.push(tempColors[i]);
    }
    return result;
}
// Greatest common divisor
const gcd = (x, y) => !y ? x : gcd(y, x % y);
// Least common multiple
const lcm = (a, b) => (a / gcd(a, b)) * b;
// Find GCD from array
const findGCD = (nums) => gcd(Math.max(...nums), Math.min(...nums));

function parseRGBAData(content) {
    const lines = content.split('\n');
    const MAX_COLORS = 1000;
    const tempColormap = [];
    let numColors = 0;
    let maxValue = -1.0;

    function isNumerical(s) {
        return !isNaN(parseFloat(s)) && isFinite(s);
    }

    for (let i = 0; i < lines.length && numColors < MAX_COLORS; i++) {
        let line = lines[i].trim();
        if (line.length === 0) {
            line = "#"; // Skip empty lines
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
                const rgbaColor = [red, green, blue, alpha];
                tempColormap.push(rgbaColor);
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

    const colormap = new Array(numColors).fill(null).map(() => [0.0, 0.0, 0.0, 0.0]);
    for (let i = 0; i < numColors; i++) {
        colormap[i] = tempColormap[i];
    }

    if (maxValue <= 1) {
        for (let i = 0; i < numColors; i++) {
            colormap[i][3] = colormap[i][3] < 0 ? 1.0 : colormap[i][3];
            for (let j = 0; j < 3; j++) {
                colormap[i][j] *= 255.0;
            }
        }
    } else if (maxValue < 256) {
        for (let i = 0; i < numColors; i++) {
            colormap[i][3] = colormap[i][3] < 0 ? 255.0 : colormap[i][3];
        }
    } else {
        for (let i = 0; i < numColors; i++) {
            colormap[i][3] = colormap[i][3] < 0 ? maxValue : colormap[i][3];
            for (let j = 0; j < 3; j++) {
                colormap[i][j] /= maxValue;
                colormap[i][j] *= 255.0;
            }
        }
    }

    // Round RGB values to integers
    for (let i = 0; i < numColors; i++) {
        for (let j = 0; j < 3; j++) {
            colormap[i][j] = Math.round(colormap[i][j]);
        }
    }
    
    return colormap;
}

export default ColorContainer