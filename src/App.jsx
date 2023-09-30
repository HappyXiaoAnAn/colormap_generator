import React from 'react'
import { useState } from 'react'
import {ColorMaps, DefaultMaps} from "./DefaultMaps.jsx";
import './App.css'

import '@shoelace-style/shoelace/dist/themes/light.css';
import SlColorPicker from '@shoelace-style/shoelace/dist/react/color-picker';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function ColorContainer() {
  const [colormap, setcolormap] = useState(['#ff0000','#ffffff','#0000ff']);
  const [n_color_out, setncolorout] = useState(5)
  
  function changeMap(e) {
      setcolormap([...ColorMaps[e.target.value].colormap]);
      setncolorout(ColorMaps[e.target.value].n_color_out);
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
    setncolorout(e.target.value);
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
  let color_out_rgb_str = ''; // RGB色碼
  color_out_rgb.map((tmp)=>{
      color_out_rgb_str += (tmp[0]+'\t'+tmp[1]+'\t'+tmp[2]+'\n')
  })
  let python_code = output_function_for_matplotlib(color_out_rgb)
  return (
      <>
          <DefaultMaps changeMap={(e)=>changeMap(e)} />
          <button popovertarget="my-popover">python code</button>
          <div popover="auto" id="my-popover">
            <textarea value={python_code} style={{width: "500px", height: "200px"}}></textarea>
          </div>
          <br></br><hr></hr>
          <div>
              <div className="selector">
                  <label>n_output colors: </label>
                  <input type='number' step='1' value={n_color_out} onChange={(e)=>{changeOutNum(e)}} style={{width: '3em'}}></input>
                  <button className="adjust_btn" onClick={addColor}>▼</button><br></br>
                  {colors}
              </div>
              <div className="txtarea"><p style={{margin: "0"}}>RGB</p>
                <textarea value={color_out_rgb_str} rows={color_out_rgb.length+1} cols={25} readOnly></textarea>
              </div>
          </div>
      </>
  );
}
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
}

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

export default ColorContainer