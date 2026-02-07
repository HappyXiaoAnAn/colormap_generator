import React from 'react'
import SlButton from '@shoelace-style/shoelace/dist/react/button'
import SlButtonGroup from '@shoelace-style/shoelace/dist/react/button-group'
import SlTooltip from '@shoelace-style/shoelace/dist/react/tooltip'
import SlIcon from '@shoelace-style/shoelace/dist/react/icon'

/**
 * Colormap size controls (number of output colors)
 */
export function ColorControls({ 
    numColors, 
    onNumColorsChange, 
    onNumColorsBlur,
    onReset, 
    onAddColor 
}) {
    return (
        <div className="selector">
            <label>n_colors: </label>
            <input 
                type='number' 
                step='1' 
                value={numColors} 
                onChange={onNumColorsChange}
                onBlur={onNumColorsBlur}
                style={{width: '3em'}}
            />
            <SlButtonGroup>
                <SlTooltip content="reset">
                    <SlButton size='small' onClick={onReset} title='reset'>
                        <SlIcon name="arrow-repeat" />
                    </SlButton>
                </SlTooltip>
                <SlTooltip content="add color">
                    <SlButton size='small' onClick={onAddColor} title='add color'>
                        <SlIcon name="plus-square-fill" />
                    </SlButton>
                </SlTooltip>
            </SlButtonGroup>
        </div>
    );
}
