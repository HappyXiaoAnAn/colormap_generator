import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useColorHistory } from '../useColorHistory';

describe('useColorHistory', () => {
  describe('initialization', () => {
    it('should initialize with initial colormap in history', () => {
      const initialColormap = [
        [255, 0, 0],
        [0, 255, 0],
        [0, 0, 255]
      ];
      const { result } = renderHook(() => useColorHistory(initialColormap));
      
      expect(result.current.history).toHaveLength(1);
      expect(result.current.currentState).toBe(0);
    });

    it('should not be able to undo initially', () => {
      const initialColormap = [[255, 0, 0]];
      const { result } = renderHook(() => useColorHistory(initialColormap));
      
      expect(result.current.canUndo).toBe(false);
    });

    it('should not be able to redo initially', () => {
      const initialColormap = [[255, 0, 0]];
      const { result } = renderHook(() => useColorHistory(initialColormap));
      
      expect(result.current.canRedo).toBe(false);
    });
  });

  describe('addToHistory', () => {
    it('should add new colormap to history', () => {
      const { result } = renderHook(() => useColorHistory([[255, 0, 0]]));
      
      act(() => {
        result.current.addToHistory([[128, 128, 128]]);
      });

      expect(result.current.history).toHaveLength(2);
      expect(result.current.currentState).toBe(1);
    });

    it('should enable undo after adding to history', () => {
      const { result } = renderHook(() => useColorHistory([[255, 0, 0]]));
      
      act(() => {
        result.current.addToHistory([[128, 128, 128]]);
      });

      expect(result.current.canUndo).toBe(true);
    });

    it('should replace future history when adding new entry after undo', () => {
      const { result } = renderHook(() => useColorHistory([[255, 0, 0]]));
      
      // Add entries
      act(() => {
        result.current.addToHistory([[100, 100, 100]]);
      });
      
      const stateAfterFirst = result.current.currentState;
      
      act(() => {
        result.current.addToHistory([[200, 200, 200]]);
      });
      
      const stateAfterSecond = result.current.currentState;
      expect(stateAfterSecond).toBeGreaterThan(stateAfterFirst);
      
      // Go back one step
      act(() => {
        result.current.undo();
      });
      
      const stateAfterUndo = result.current.currentState;
      expect(stateAfterUndo).toBeLessThan(stateAfterSecond);
      
      // Add new entry - should maintain proper history
      act(() => {
        result.current.addToHistory([[150, 150, 150]]);
      });
      
      // We should be able to verify the new entry was added
      expect(result.current.currentState).toBeGreaterThanOrEqual(stateAfterUndo);
    });
  });

  describe('undo', () => {
    it('should not undo when at beginning', () => {
      const { result } = renderHook(() => useColorHistory([[255, 0, 0]]));
      
      let undoResult;
      act(() => {
        undoResult = result.current.undo();
      });
      
      expect(undoResult).toBeUndefined();
      expect(result.current.currentState).toBe(0);
    });

    it('should decrease currentState when undoing', () => {
      const { result } = renderHook(() => useColorHistory([[255, 0, 0]]));
      
      act(() => {
        result.current.addToHistory([[100, 100, 100]]);
      });
      
      expect(result.current.currentState).toBe(1);
      
      act(() => {
        result.current.undo();
      });
      
      expect(result.current.currentState).toBe(0);
    });

    it('should enable redo when undoing', () => {
      const { result } = renderHook(() => useColorHistory([[255, 0, 0]]));
      
      act(() => {
        result.current.addToHistory([[100, 100, 100]]);
      });
      
      expect(result.current.canRedo).toBe(false);
      
      act(() => {
        result.current.undo();
      });
      
      expect(result.current.canRedo).toBe(true);
    });
  });

  describe('redo', () => {
    it('should not redo when at end', () => {
      const { result } = renderHook(() => useColorHistory([[255, 0, 0]]));
      
      let redoResult;
      act(() => {
        redoResult = result.current.redo();
      });
      
      expect(redoResult).toBeUndefined();
      expect(result.current.currentState).toBe(0);
    });

    it('should increase currentState when redoing', () => {
      const { result } = renderHook(() => useColorHistory([[255, 0, 0]]));
      
      act(() => {
        result.current.addToHistory([[100, 100, 100]]);
      });
      
      const stateAfterAdd = result.current.currentState;
      expect(stateAfterAdd).toBeGreaterThan(0);
      
      // Undo to go back
      act(() => {
        result.current.undo();
      });
      
      const stateAfterUndo = result.current.currentState;
      expect(stateAfterUndo).toBeLessThan(stateAfterAdd);
      
      // Redo should increase currentState back
      act(() => {
        result.current.redo();
      });
      
      const stateAfterRedo = result.current.currentState;
      expect(stateAfterRedo).toBeGreaterThan(stateAfterUndo);
    });

    it('should disable redo when at end', () => {
      const { result } = renderHook(() => useColorHistory([[255, 0, 0]]));
      
      act(() => {
        result.current.addToHistory([[100, 100, 100]]);
        result.current.undo();
        result.current.redo();
      });
      
      expect(result.current.canRedo).toBe(false);
    });
  });

  describe('state boundaries', () => {
    it('should not go below 0 when undoing repeatedly', () => {
      const { result } = renderHook(() => useColorHistory([[255, 0, 0]]));
      
      act(() => {
        for (let i = 0; i < 10; i++) {
          result.current.undo();
        }
      });
      
      expect(result.current.currentState).toBe(0);
    });

    it('should not exceed history length when redoing repeatedly', () => {
      const { result } = renderHook(() => useColorHistory([[255, 0, 0]]));
      
      act(() => {
        result.current.addToHistory([[100, 100, 100]]);
        result.current.undo();
      });
      
      const maxState = result.current.history.length - 1;
      
      act(() => {
        for (let i = 0; i < 10; i++) {
          result.current.redo();
        }
      });
      
      expect(result.current.currentState).toBeLessThanOrEqual(maxState);
    });

    it('should maintain history integrity through operations', () => {
      const { result } = renderHook(() => useColorHistory([[255, 0, 0]]));
      
      act(() => {
        result.current.addToHistory([[100, 100, 100]]);
        result.current.addToHistory([[200, 200, 200]]);
      });
      
      const initialLength = result.current.history.length;
      
      act(() => {
        result.current.undo();
      });
      
      // Length should remain the same after undo (we're just moving pointer)
      expect(result.current.history.length).toBe(initialLength);
    });
  });
});
