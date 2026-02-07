import React from 'react'
import { ColorSelector } from './ColorSelector'

/**
 * Color grid - displays all color selectors
 */
export function ColorGrid({
    colormap,
    onSetBlankColor,
    onSwapUp,
    onSwapDown,
    onColorChange,
    onAddColorDown,
    onDeleteColor,
    onColorPickerBlur
}) {
    return (
        <>
            {colormap.map((color, index) => (
                <ColorSelector
                    key={index}
                    rgb={color}
                    rank={index + 1}
                    colorId={index}
                    numColors={colormap.length}
                    onSetBlankColor={onSetBlankColor}
                    onSwapUp={onSwapUp}
                    onSwapDown={onSwapDown}
                    onColorChange={onColorChange}
                    onAddColorDown={onAddColorDown}
                    onDeleteColor={onDeleteColor}
                    onBlur={onColorPickerBlur}
                />
            ))}
        </>
    );
}
