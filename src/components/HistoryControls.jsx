import React from 'react'
import SlIconButton from '@shoelace-style/shoelace/dist/react/icon-button'
import SlTooltip from '@shoelace-style/shoelace/dist/react/tooltip'

/**
 * Undo/Redo controls component
 */
export function HistoryControls({ onUndo, onRedo, canUndo, canRedo }) {
    return (
        <div className="history-controls">
            <SlTooltip content="Undo (Ctrl+Z)">
                <SlIconButton name="arrow-counterclockwise" label="Undo" onClick={onUndo} disabled={!canUndo} />
            </SlTooltip>
            <SlTooltip content="Redo (Ctrl+Y)">
                <SlIconButton name="arrow-clockwise" label="Redo" onClick={onRedo} disabled={!canRedo} />
            </SlTooltip>
        </div>
    );
}
