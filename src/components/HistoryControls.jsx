import React from 'react'
import SlButton from '@shoelace-style/shoelace/dist/react/button'
import SlButtonGroup from '@shoelace-style/shoelace/dist/react/button-group'
import SlTooltip from '@shoelace-style/shoelace/dist/react/tooltip'

/**
 * Undo/Redo controls component
 */
export function HistoryControls({ onUndo, onRedo, canUndo, canRedo }) {
    return (
        <SlButtonGroup>
            <SlTooltip content="Undo">
                <SlButton size='small' onClick={onUndo} disabled={!canUndo}>
                    ↶
                </SlButton>
            </SlTooltip>
            <SlTooltip content="Redo">
                <SlButton size='small' onClick={onRedo} disabled={!canRedo}>
                    ↷
                </SlButton>
            </SlTooltip>
        </SlButtonGroup>
    );
}
