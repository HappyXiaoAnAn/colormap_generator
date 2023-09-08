// Happy
const ColorMaps = {
    'default':{
        colormap: [
            '#0000ff',
            '#ffffff',
            '#ff0000'
        ],
        n_color_out: 5
    },
    'preci':{
        colormap:[
            '#c1c1c1',
            '#9bffff',
            '#00cfff',
            '#0198ff',
            '#0165ff',
            '#309901',
            '#32ff00',
            '#f8ff00',
            '#ffcb00',
            '#ff9a00',
            '#fa0300',
            '#cc0003',
            '#a00000',
            '#98009a',
            '#c304cc',
            '#f805f3',
            '#fecbff'
        ],
        n_color_out: 17
    },
    'radar_dbz':{
        colormap:[
            '#00ffff',
            '#00ecff',
            '#00daff',
            '#00c8ff',
            '#00b6ff',
            '#00a3ff',
            '#0091ff',
            '#007fff',
            '#006dff',
            '#005bff',
            '#0048ff',
            '#0036ff',
            '#0024ff',
            '#0012ff',
            '#0000ff',
            '#00ff00',
            '#00f400',
            '#00e900',
            '#00de00',
            '#00d300',
            '#00c800',
            '#00be00',
            '#00b400',
            '#00aa00',
            '#00a000',
            '#009600',
            '#33ab00',
            '#66c000',
            '#99d500',
            '#ccea00',
            '#ffff00',
            '#fff400',
            '#ffe900',
            '#ffde00',
            '#ffd300',
            '#ffc800',
            '#ffb800',
            '#ffa800',
            '#ff9800',
            '#ff8800',
            '#ff7800',
            '#ff6000',
            '#ff4800',
            '#ff3000',
            '#ff1800',
            '#ff0000',
            '#f40000',
            '#e90000',
            '#de0000',
            '#d30000',
            '#c80000',
            '#be0000',
            '#b40000',
            '#aa0000',
            '#a00000',
            '#960000',
            '#ab0033',
            '#c00066',
            '#d50099',
            '#ea00cc',
            '#ff00ff',
            '#ea00ff',
            '#d500ff',
            '#c000ff',
            '#ab00ff',
            '#9600ff'
        ],
        n_color_out: 66
    }
}

function DefaultMaps(props) {
    const mapnames = Object.keys(ColorMaps);
    const tmp = mapnames.map(
        (mapname,i)=>{
            return (
                <option key={i}>{mapname}</option>
            )
        }
    )
    return (
        <select onChange={(e)=>props.changeMap(e)}>
            {tmp}
        </select>
    )
}
export {ColorMaps, DefaultMaps};