import React from 'react'
import SlColorPicker from '@shoelace-style/shoelace/dist/react/color-picker'
import SlIconButton from '@shoelace-style/shoelace/dist/react/icon-button'
import SlTooltip from '@shoelace-style/shoelace/dist/react/tooltip'

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
    const isBlank = rgb === '';
    const rgbValue = isBlank ? '' : `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;

    return (
        <div className={isBlank ? 'color-row is-blank' : 'color-row'}>
            <span className="rank">{rank}.</span>
            <SlColorPicker
                size='small'
                label={`color ${rank}`}
                value={rgbValue}
                onSlInput={(e) => onColorChange(e, colorId)}
                onSlBlur={onBlur}
            />
            <span className="auto-tag">{isBlank ? 'auto' : ''}</span>
            <SlTooltip content="Clear (interpolate automatically)">
                <SlIconButton
                    name="eraser"
                    label="Clear color"
                    onClick={() => onSetBlankColor(colorId)}
                    disabled={isBlank || isFirstColor || isLastColor}
                />
            </SlTooltip>
            <SlTooltip content="Move up">
                <SlIconButton
                    name="arrow-up"
                    label="Move up"
                    onClick={() => onSwapUp(colorId)}
                    disabled={isFirstColor}
                />
            </SlTooltip>
            <SlTooltip content="Move down">
                <SlIconButton
                    name="arrow-down"
                    label="Move down"
                    onClick={() => onSwapDown(colorId)}
                    disabled={isLastColor}
                />
            </SlTooltip>
            <SlTooltip content="Insert color below">
                <SlIconButton
                    name="plus-lg"
                    label="Insert color below"
                    onClick={() => onAddColorDown(colorId)}
                />
            </SlTooltip>
            <SlTooltip content="Delete">
                <SlIconButton
                    name="trash"
                    label="Delete color"
                    onClick={() => onDeleteColor(colorId)}
                    disabled={numColors <= 2}
                />
            </SlTooltip>
        </div>
    );
}
