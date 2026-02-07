export function DefaultMaps(props) {
    const mapNames = [
        'default',
        'cwy',
        'radar_dbz_cwb',
        'preci_cwb',
        'OceanLakeLandSnow'
    ]

    const options = mapNames.map(
        (mapName, i)=>{
            return (
                <option key={i}>{mapName}</option>
            )
        }
    )
    return (
        <>
            <label>Template: </label>
            <select title='colormaps' onChange={(e)=>props.changeMap(e)} style={{maxWidth: "80px"}}>
                {options}
            </select>
        </>
    )
}