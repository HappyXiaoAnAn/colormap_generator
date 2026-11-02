import React, { useState, useEffect } from 'react'
import SlButton from '@shoelace-style/shoelace/dist/react/button'
import SlIcon from '@shoelace-style/shoelace/dist/react/icon'
import { PreviewColorbar } from './PreviewColorbar'
import { HistoryControls } from './HistoryControls'
import { ColorImportControls } from './ColorImportControls'
import { ColorControls } from './ColorControls'
import { ColorGrid } from './ColorGrid'
import { ColorOutputPanel } from './ColorOutputPanel'
import { useColorHistory } from '../hooks/useColorHistory'
import { parseRGBAData } from '../utils/colorParser'
import { interpolateColors } from '../utils/colorInterpolation'
import '../App.css'

/**
 * Main color container component - orchestrates all color editing functionality
 */
export function ColorContainer() {
    // Initial colormap state
    const initialColormap = [[255,0,0],'','',[255,255,255],[0,0,255]];
    
    // State management
    const [colormap, setColormap] = useState(initialColormap);
    const [numColorsOut, setNumColorsOut] = useState(5);
    const [inputNum, setInputNum] = useState(5);
    
    // History management
    const { addToHistory, undo, redo, canUndo, canRedo } = useColorHistory(initialColormap);

    // File import handlers
    const handleColormapFileRead = (e) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onload = () => {
            const colormapData = parseRGBAData(fileReader.result);
            setColormap(colormapData);
            setNumColorsOut(colormapData.length);
            setInputNum(colormapData.length);
            addToHistory(colormapData);
        };
        fileReader.readAsText(file);
    };

    const handleMapChange = (mapName) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', './colormap/' + mapName + '.rgb');
        xhr.responseType = 'text';
        xhr.onload = () => {
            const colormapData = parseRGBAData(xhr.response);
            setColormap(colormapData);
            setNumColorsOut(colormapData.length);
            setInputNum(colormapData.length);
            addToHistory(colormapData);
        };
        xhr.send();
    };

    // Color manipulation handlers
    const validateColorEndpoints = (updatedColormap) => {
        // Ensure first color is not null
        if (updatedColormap[0] === '') {
            updatedColormap[0] = [255, 255, 255];
        }
        // Ensure last color is not null
        if (updatedColormap[updatedColormap.length - 1] === '') {
            updatedColormap[updatedColormap.length - 1] = [255, 255, 255];
        }
        return updatedColormap;
    };

    const handleAddColor = () => {
        const updatedColormap = [[255, 255, 255], ...colormap];
        setColormap(updatedColormap);
        addToHistory(updatedColormap);
    };

    const handleAddColorDown = (index) => {
        const updatedColormap = [...colormap];
        updatedColormap.splice(index + 1, 0, '');
        validateColorEndpoints(updatedColormap);
        setColormap(updatedColormap);
        if (numColorsOut < updatedColormap.length) {
            setNumColorsOut(updatedColormap.length);
        }
        addToHistory(updatedColormap);
    };

    const handleDeleteColor = (index) => {
        if (colormap.length === 2) return;
        const updatedColormap = [...colormap];
        updatedColormap.splice(index, 1);
        validateColorEndpoints(updatedColormap);
        setColormap(updatedColormap);
        addToHistory(updatedColormap);
    };

    const handleColorChange = (e, index) => {
        const updatedColormap = [...colormap];
        const rgbValue = e.target.getFormattedValue('rgb')
            .substr(4)
            .split(")")[0]
            .split(",")
            .map((str) => parseInt(str));
        updatedColormap.splice(index, 1, rgbValue);
        validateColorEndpoints(updatedColormap);
        setColormap(updatedColormap);
    };

    const handleSetBlankColor = (index) => {
        if (index === 0 || index === colormap.length - 1) return;
        const updatedColormap = [...colormap];
        updatedColormap.splice(index, 1, '');
        setColormap(updatedColormap);
        addToHistory(updatedColormap);
    };

    const handleSwapUp = (index) => {
        if (index === 0) return;
        const updatedColormap = [...colormap];
        updatedColormap[index - 1] = updatedColormap.splice(
            index,
            1,
            updatedColormap[index - 1]
        )[0];
        validateColorEndpoints(updatedColormap);
        setColormap(updatedColormap);
        addToHistory(updatedColormap);
    };

    const handleSwapDown = (index) => {
        if (index === colormap.length - 1) return;
        const updatedColormap = [...colormap];
        updatedColormap[index + 1] = updatedColormap.splice(
            index,
            1,
            updatedColormap[index + 1]
        )[0];
        validateColorEndpoints(updatedColormap);
        setColormap(updatedColormap);
        addToHistory(updatedColormap);
    };

    // Num colors handlers
    const handleNumColorsChange = (e) => {
        const value = Number(e.target.value);
        setInputNum(e.target.value);
        if (value >= colormap.length) {
            setNumColorsOut(value);
        }
    };

    const handleResetNumColors = () => {
        setInputNum(colormap.length);
        setNumColorsOut(colormap.length);
    };

    const handleNumColorsBlur = (e) => {
        const value = Number(e.target.value);
        const numColors = value < colormap.length ? colormap.length : value;
        setInputNum(numColors);
        setNumColorsOut(numColors);
    };

    // History handlers
    const handleUndo = () => {
        const previousColormap = undo();
        if (previousColormap) {
            setColormap(previousColormap);
        }
    };

    const handleRedo = () => {
        const nextColormap = redo();
        if (nextColormap) {
            setColormap(nextColormap);
        }
    };

    // Keyboard shortcuts: Ctrl/Cmd+Z undo, Ctrl/Cmd+Shift+Z or Ctrl+Y redo
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!(e.ctrlKey || e.metaKey)) return;
            // Keep native undo inside text fields (including Shoelace shadow DOM)
            const target = e.composedPath()[0];
            if (target && ['INPUT', 'TEXTAREA'].includes(target.tagName)) return;
            const key = e.key.toLowerCase();
            if (key === 'z' && !e.shiftKey) {
                e.preventDefault();
                handleUndo();
            } else if (key === 'y' || (key === 'z' && e.shiftKey)) {
                e.preventDefault();
                handleRedo();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    });

    const handleColorPickerBlur = () => {
        const updatedColormap = [...colormap];
        addToHistory(updatedColormap);
    };

    // Calculate interpolated colors
    const colorInRgb = colormap;
    const colorOutRgb = interpolateColors(colorInRgb, numColorsOut);

    return (
        <>
            <header className="app-header">
                <div>
                    <h1>Colormap Generator</h1>
                    <p>Pick a few control points, leave the rest blank to interpolate, then export.</p>
                </div>
                <HistoryControls
                    onUndo={handleUndo}
                    onRedo={handleRedo}
                    canUndo={canUndo}
                    canRedo={canRedo}
                />
            </header>
            <PreviewColorbar colorOutRgb={colorOutRgb} colormap={colormap} />
            <div className="toolbar">
                <ColorImportControls
                    onFileImport={handleColormapFileRead}
                    onMapChange={handleMapChange}
                />
                <ColorControls
                    numColors={inputNum}
                    minColors={colormap.length}
                    onNumColorsChange={handleNumColorsChange}
                    onNumColorsBlur={handleNumColorsBlur}
                    onReset={handleResetNumColors}
                />
            </div>
            <div className="main-grid">
                <section className="panel">
                    <div className="panel-header">
                        <h2>Control points ({colormap.length})</h2>
                        <SlButton size="small" onClick={handleAddColor}>
                            <SlIcon slot="prefix" name="plus-lg" />
                            Add at top
                        </SlButton>
                    </div>
                    <ColorGrid
                        colormap={colormap}
                        onSetBlankColor={handleSetBlankColor}
                        onSwapUp={handleSwapUp}
                        onSwapDown={handleSwapDown}
                        onColorChange={handleColorChange}
                        onAddColorDown={handleAddColorDown}
                        onDeleteColor={handleDeleteColor}
                        onColorPickerBlur={handleColorPickerBlur}
                    />
                </section>
                <section className="panel">
                    <h2>Output ({colorOutRgb.length} colors)</h2>
                    <ColorOutputPanel
                        colorInRgb={colorInRgb}
                        colorOutRgb={colorOutRgb}
                        onColorUpdate={setColormap}
                        onAddToHistory={addToHistory}
                    />
                </section>
            </div>
            <footer className="app-footer">
                <p>More colormaps: <a href="https://www.ncl.ucar.edu/Document/Graphics/color_table_gallery.shtml" target="_blank" rel="noreferrer">NCL Graphics: Color Table Gallery</a></p>
                <p>Source on <a href="https://github.com/HappyXiaoAnAn/colormap_generator" target="_blank" rel="noreferrer">GitHub</a></p>
            </footer>
        </>
    );
}

export default ColorContainer;
