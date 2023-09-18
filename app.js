import {ColorMaps, DefaultMaps} from "./DefaultMaps.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class ColorContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colormap: ['#ff0000','#ffffff','#0000ff'],
            n_color_out: 5
        }
    }
    changeMap(e) {
        this.setState(ColorMaps[e.target.value]);
    }
    addColor() {
        const colormap = this.state.colormap;
        colormap.unshift(['#ffffff']);
        this.setState({
            colormap: colormap,
        });
    }
    addColorDown(i) {
        const colormap = this.state.colormap;
        colormap.splice(i+1,0,'');
        if(colormap.slice(-1)=='') colormap[colormap.length-1]='#ffffff'; // make sure the last color is not null
        this.setState({
            colormap: colormap,
        });
    }
    delColor(i) {
        if(this.state.colormap.length==2) return
        const colormap = this.state.colormap;
        colormap.splice(i,1);
        this.setState({
            colormap: colormap,
        });
    }
    changeColor(e,i) {
        const color = e.target.value;
        const colormap = this.state.colormap;
        colormap.splice(i,1,color);
        this.setState({
            colormap: colormap
        });
    }
    swapUp(i) {
        if(i==0) return
        const colormap = this.state.colormap;
        colormap[i-1] = colormap.splice(i,1,colormap[i-1])[0];
        this.setState({
            colormap: colormap
        });
    }
    swapDown(i) {
        if(i==this.state.colormap.length-1) return
        const colormap = this.state.colormap;
        colormap[i+1] = colormap.splice(i,1,colormap[i+1])[0];
        this.setState({
            colormap: colormap
        });
    }
    changeOutNum(e) {
        const n_color_out = e.target.value;
        this.setState({
            n_color_out: n_color_out
        })
    }
    render() {
        const colors = this.state.colormap.map((tmp,i) => {
            return (
                <ColorSelector
                    key={i}
                    hex={tmp}
                    rank={i+1}
                    swapUp={()=>this.swapUp(i)}
                    swapDown={()=>this.swapDown(i)}
                    changeColor={(e)=>this.changeColor(e,i)}
                    addColorDown={()=>this.addColorDown(i)}
                    delColor={()=>this.delColor(i)}
                />
            )
        })
        const color_in_rgb = this.state.colormap.map(tmp=>hexToRgb(tmp))
        const color_out_rgb = interpolate(color_in_rgb, this.state.n_color_out)
        Draw(color_out_rgb); // 畫colorbar
        let color_out_rgb_str = ''; // RGB色碼
        color_out_rgb.map((tmp)=>{
            color_out_rgb_str += (tmp[0]+'\t'+tmp[1]+'\t'+tmp[2]+'\n')
        })
        return (
            <div>
                <DefaultMaps changeMap={(e)=>this.changeMap(e)}/><br></br><hr></hr>
                <div>
                    <div className="selector">
                        <label>n_output colors: </label>
                        <input type='number' step='1' value={this.state.n_color_out} onChange={(e)=>{this.changeOutNum(e)}} style={{width: '3em'}}></input>
                        <button onClick={() => this.addColor()}>▼</button>
                        {colors}
                    </div>
                    <textarea className="txtarea" value={color_out_rgb_str} rows={color_out_rgb.length+1} cols={25} readOnly></textarea>
                </div>
            </div>
        );
    }
}
// 色塊
function ColorSelector(props) {
    return (
        <div>
            <span>{props.rank}. </span>
            <input type="color" value={props.hex} onChange={(e,i)=>props.changeColor(e,i)} style={{width: "5em"}}></input>
            <button onClick={(i)=>props.swapUp(i)}>↑</button>
            <button onClick={(i)=>props.swapDown(i)}>↓</button>
            <button onClick={(i)=>props.addColorDown(i)}>▼</button>
            <button onClick={(i)=>props.delColor(i)}>X</button>
        </div>
    );
}

// 畫colorbar
function Draw(color_out) {
    ctx.clearRect(0,0,300,100);
    ctx.beginPath();
    ctx.rect(50, 30, 200, 40);
    ctx.stroke();
    
    for (let i = 0; i < color_out.length; i++) {
        const color_str = 'rgb('+color_out[i][0]+','+color_out[i][1]+','+color_out[i][2]+')';
        const px = 50+i*200/color_out.length;
        DrawRect(color_str,px, 30, 200/color_out.length, 40);
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


const root = ReactDOM.createRoot(document.getElementById('root_container'));
root.render(<ColorContainer />);