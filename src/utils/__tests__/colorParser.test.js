import { describe, it, expect } from 'vitest';
import { parseRGBAData, parseColorData } from '../colorParser';

describe('colorParser', () => {
  describe('parseRGBAData', () => {
    it('should parse 0-1 range RGB values correctly', () => {
      const content = '0.5 0.25 0.75\n0.1 0.2 0.3';
      const result = parseRGBAData(content);
      
      expect(result).toHaveLength(2);
      expect(result[0]).toEqual([128, 64, 191, 1.0]); // 0.5*255 ≈ 128
      expect(result[1]).toEqual([26, 51, 77, 1.0]); // 0.1*255 ≈ 26
    });

    it('should parse 0-255 range RGB values correctly', () => {
      const content = '255 128 64\n100 150 200';
      const result = parseRGBAData(content);
      
      expect(result).toHaveLength(2);
      expect(result[0]).toEqual([255, 128, 64, 255.0]);
      expect(result[1]).toEqual([100, 150, 200, 255.0]);
    });

    it('should parse RGBA values with alpha channel', () => {
      const content = '0.5 0.5 0.5 0.8\n0.3 0.3 0.3 0.6';
      const result = parseRGBAData(content);
      
      expect(result).toHaveLength(2);
      expect(result[0][3]).toBe(0.8);
      expect(result[1][3]).toBe(0.6);
    });

    it('should skip empty lines', () => {
      const content = '\n\n0.5 0.5 0.5\n\n0.3 0.3 0.3\n';
      const result = parseRGBAData(content);
      
      expect(result).toHaveLength(2);
    });

    it('should skip lines with insufficient data', () => {
      const content = '0.5 0.5\n0.5 0.5 0.5\n0.3 0.3 0.3';
      const result = parseRGBAData(content);
      
      expect(result).toHaveLength(2);
    });

    it('should skip lines with non-numerical values', () => {
      const content = 'invalid data\n0.5 0.5 0.5\n0.3 0.3 0.3';
      const result = parseRGBAData(content);
      
      expect(result).toHaveLength(2);
    });

    it('should handle large values (>256)', () => {
      const content = '1000 500 750\n2000 1000 1500';
      const result = parseRGBAData(content);
      
      expect(result).toHaveLength(2);
      // Values are normalized by dividing by max (2000), then multiplied by 255
      // So: 1000/2000*255 ≈ 128, 500/2000*255 ≈ 64, 750/2000*255 ≈ 96
      // Alpha should remain at the max value
      expect(result[0][0]).toBe(128);
      expect(result[0][1]).toBe(64);
      expect(result[0][2]).toBe(96);
      expect(result[1][3]).toBe(2000);
    });

    it('should return empty array for empty content', () => {
      const result = parseRGBAData('');
      expect(result).toEqual([]);
    });

    it('should respect MAX_COLORS limit', () => {
      let content = '';
      for (let i = 0; i < 1100; i++) {
        content += '0.5 0.5 0.5\n';
      }
      const result = parseRGBAData(content);
      
      expect(result.length).toBeLessThanOrEqual(1000);
    });
  });

  describe('parseColorData', () => {
    it('should parse color data with blank entries', () => {
      const content = '0.5 0.5 0.5\n\n0.3 0.3 0.3';
      const result = parseColorData(content);
      
      expect(result).toHaveLength(3);
      expect(result[1]).toBe(''); // blank line in middle
    });

    it('should remove leading blank lines', () => {
      const content = '\n\n0.5 0.5 0.5\n0.3 0.3 0.3';
      const result = parseColorData(content);
      
      expect(result[0]).not.toBe('');
    });

    it('should remove trailing blank lines', () => {
      const content = '0.5 0.5 0.5\n0.3 0.3 0.3\n\n\n';
      const result = parseColorData(content);
      
      expect(result[result.length - 1]).not.toBe('');
    });

    it('should preserve internal blank entries', () => {
      const content = '0.5 0.5 0.5\n\n\n0.3 0.3 0.3';
      const result = parseColorData(content);
      
      expect(result.some(item => item === '')).toBe(true);
    });

    it('should parse color data with 0-255 values', () => {
      const content = '255 128 64\n100 150 200';
      const result = parseColorData(content);
      
      expect(result).toHaveLength(2);
      expect(result[0]).toEqual([255, 128, 64, 255.0]);
    });

    it('should handle all blank content', () => {
      const content = '\n\n\n';
      const result = parseColorData(content);
      
      // All blank content returns array of blank strings per implementation
      expect(result.every(item => item === '')).toBe(true);
    });
  });
});
