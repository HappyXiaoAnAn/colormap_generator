import React from 'react'
import SlInput from '@shoelace-style/shoelace/dist/react/input'
import SlIconButton from '@shoelace-style/shoelace/dist/react/icon-button'
import SlTooltip from '@shoelace-style/shoelace/dist/react/tooltip'

/**
 * Colormap size controls (number of output colors)
 */
export function ColorControls({
    numColors,
    minColors,
    onNumColorsChange,
    onNumColorsBlur,
    onReset
}) {
    const tooFew = Number(numColors) < minColors;

    return (
        <div className="count-control">
            <label htmlFor="num-colors-input">Output colors</label>
            <SlInput
                id="num-colors-input"
                type='number'
                min={minColors}
                step={1}
                value={String(numColors)}
                onSlInput={onNumColorsChange}
                onSlBlur={onNumColorsBlur}
            >
                <SlTooltip slot="suffix" content="Reset to number of control points">
                    <SlIconButton name="arrow-repeat" label="Reset" onClick={onReset} />
                </SlTooltip>
            </SlInput>
            <span className={tooFew ? 'hint hint-warning' : 'hint'}>
                {tooFew ? `Must be at least ${minColors}` : `min ${minColors}`}
            </span>
        </div>
    );
}
