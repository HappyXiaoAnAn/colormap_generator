function DefaultMaps_2(props) {
    const mapnames = [
        'default',
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
        <select title='colormaps' onChange={(e)=>props.changeMap(e)}>
            {tmp}
        </select>
    )
}
export {DefaultMaps_2};