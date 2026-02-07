import React from 'react'
import { DefaultMaps } from './DefaultMaps'

/**
 * Import and template selection controls
 */
export function ColorImportControls({ onFileImport, onMapChange }) {
    return (
        <>
            <input
                type="file"
                accept=".rgb"
                onChange={onFileImport}
            />
            <DefaultMaps changeMap={onMapChange} />
        </>
    );
}
