import React from 'react'
import SlColorPicker from '@shoelace-style/shoelace/dist/react/color-picker'
import SlButton from '@shoelace-style/shoelace/dist/react/button'
import SlButtonGroup from '@shoelace-style/shoelace/dist/react/button-group'
import SlTooltip from '@shoelace-style/shoelace/dist/react/tooltip'
import SlIcon from '@shoelace-style/shoelace/dist/react/icon'

/**
 * Single color selector component
 */
export function ColorSelector({
    rgb,
    rank,
    colorId,
    numColors,
    onSetBlankColor,
    onSwapUp,
    onSwapDown,
    onColorChange,
    onAddColorDown,
    onDeleteColor,
    onBlur
}) {
    const isFirstColor = colorId === 0;
    const isLastColor = colorId === numColors - 1;
    const rgbValue = rgb === '' ? '' : `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;

    return (
        <div style={{flex: "0 0 auto", display: "flex", alignItems:"center", padding:"1px"}}>
            <span style={{display: "inline-block", width: "2em"}}>{rank}.</span>
            <SlColorPicker 
                size='small'
                value={rgbValue}
                onSlInput={(e) => onColorChange(e, colorId)} 
                onSlBlur={onBlur}
            />
            <SlButtonGroup>
                <SlTooltip content="set color to blank">
                    <SlButton 
                        size="small" 
                        onClick={() => onSetBlankColor(colorId)} 
                        disabled={isFirstColor || isLastColor}
                    >
                        #
                    </SlButton>
                </SlTooltip>
                <SlTooltip content="swap up">
                    <SlButton 
                        size="small" 
                        onClick={() => onSwapUp(colorId)} 
                        disabled={isFirstColor}
                    >
                        ▲
                    </SlButton>
                </SlTooltip>
                <SlTooltip content="swap down">
                    <SlButton 
                        size="small" 
                        onClick={() => onSwapDown(colorId)} 
                        disabled={isLastColor}
                    >
                        ▼
                    </SlButton>
                </SlTooltip>
                <SlTooltip content="add color down">
                    <SlButton size="small" onClick={() => onAddColorDown(colorId)}>
                        <SlIcon name="plus-square-fill" />
                    </SlButton>
                </SlTooltip>
                <SlTooltip content="delete color">
                    <SlButton size="small" onClick={() => onDeleteColor(colorId)}>
                        X
                    </SlButton>
                </SlTooltip>
            </SlButtonGroup>
            <br />
        </div>
    );
}
