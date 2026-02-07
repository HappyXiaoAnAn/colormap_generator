import { useState } from 'react';

/**
 * Custom hook for managing colormap history (undo/redo)
 * @param {Array} initialColormap - Initial colormap state
 * @returns {Object} History state and handlers
 */
export function useColorHistory(initialColormap) {
    const [history, setHistory] = useState([initialColormap]);
    const [currentState, setCurrentState] = useState(0);

    const addToHistory = (newColormap) => {
        // Remove any future states when a new change is made
        const nextHistory = [...history.slice(0, currentState + 1), newColormap];
        setHistory(nextHistory);
        setCurrentState(nextHistory.length - 1);
    };

    const undo = () => {
        if (currentState === 0) return;
        const previousColormap = history[currentState - 1];
        setCurrentState(currentState - 1);
        return previousColormap;
    };

    const redo = () => {
        if (currentState === history.length - 1) return;
        const nextColormap = history[currentState + 1];
        setCurrentState(currentState + 1);
        return nextColormap;
    };

    const canUndo = currentState > 0;
    const canRedo = currentState < history.length - 1;

    return {
        history,
        currentState,
        addToHistory,
        undo,
        redo,
        canUndo,
        canRedo
    };
}
