import React from 'react'
import { ColorOutputText } from '../ColorOutputText'

/**
 * Output panel - displays color output and code generation
 */
export function ColorOutputPanel({
    colorInRgb,
    colorOutRgb,
    onColorUpdate,
    onAddToHistory
}) {
    return (
        <ColorOutputText
            colorInRgb={colorInRgb}
            colorOutRgb={colorOutRgb}
            setColormap={onColorUpdate}
            addHistory={onAddToHistory}
        />
    );
}
