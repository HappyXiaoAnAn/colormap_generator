import SlDropdown from '@shoelace-style/shoelace/dist/react/dropdown'
import SlButton from '@shoelace-style/shoelace/dist/react/button'
import SlMenu from '@shoelace-style/shoelace/dist/react/menu'
import SlMenuItem from '@shoelace-style/shoelace/dist/react/menu-item'

const MAP_NAMES = [
    'default',
    'cwy',
    'radar_dbz_cwb',
    'preci_cwb',
    'OceanLakeLandSnow'
]

/**
 * Template menu - every pick loads the template, even the same one twice
 */
export function DefaultMaps({ changeMap }) {
    return (
        <SlDropdown>
            <SlButton slot="trigger" caret>Load template</SlButton>
            <SlMenu onSlSelect={(e) => changeMap(e.detail.item.value)}>
                {MAP_NAMES.map((mapName) => (
                    <SlMenuItem key={mapName} value={mapName}>{mapName}</SlMenuItem>
                ))}
            </SlMenu>
        </SlDropdown>
    )
}
