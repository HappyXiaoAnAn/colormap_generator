import React, { useRef } from 'react'
import SlButton from '@shoelace-style/shoelace/dist/react/button'
import SlIcon from '@shoelace-style/shoelace/dist/react/icon'
import SlTooltip from '@shoelace-style/shoelace/dist/react/tooltip'
import { DefaultMaps } from './DefaultMaps'

/**
 * Import and template selection controls
 */
export function ColorImportControls({ onFileImport, onMapChange }) {
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        if (!e.target.files.length) return;
        onFileImport(e);
        // Allow importing the same file again
        e.target.value = '';
    };

    return (
        <>
            <DefaultMaps changeMap={onMapChange} />
            <SlTooltip content="Text file with one color per line: R G B (0–255)">
                <SlButton onClick={() => fileInputRef.current.click()}>
                    <SlIcon slot="prefix" name="upload" />
                    Import .rgb
                </SlButton>
            </SlTooltip>
            <input
                ref={fileInputRef}
                className="visually-hidden"
                type="file"
                accept=".rgb"
                tabIndex={-1}
                onChange={handleFileChange}
            />
        </>
    );
}
