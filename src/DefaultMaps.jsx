export function DefaultMaps(props) {
    const mapnames = [
        'default',
        'cwy',
        'radar_dbz_cwb',
        'preci_cwb',
        'OceanLakeLandSnow'
    ]

    const tmp = mapnames.map(
        (mapname,i)=>{
            return (
                <option key={i}>{mapname}</option>
            )
        }
    )
    return (
        <>
            <label>Template: </label>
            <select title='colormaps' onChange={(e)=>props.changeMap(e)} style={{maxWidth: "80px"}}>
                {tmp}
            </select>
        </>
    )
}