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
    'blre':{
        colormap: [
            '#0000ff',
            '#ff0000'
        ],
        n_color_out: 2
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