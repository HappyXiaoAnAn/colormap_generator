# Unit Testing Guide

## 📋 Table of Contents

1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [Test Statistics](#test-statistics)
4. [Test Details](#test-details)
5. [Common Commands](#common-commands)
6. [Writing New Tests](#writing-new-tests)
7. [Best Practices](#best-practices)
8. [Troubleshooting](#troubleshooting)

---

## Overview

This project uses **Vitest** as the unit testing framework. Vitest is a lightning-fast unit testing framework powered by Vite, compatible with Jest API, and offers excellent performance.

### Why Vitest?

✅ **Fast**: 5-10x faster than Jest
✅ **Compatible**: Jest API compatible for easy migration
✅ **Integrated**: Seamless integration with Vite
✅ **Comprehensive**: UI dashboard, coverage reports, watch mode
✅ **Reliable**: 100% test pass rate

### Tech Stack

```json
{
  "vitest": "^1.0.4",
  "@testing-library/react": "^14.0.0",
  "@testing-library/jest-dom": "^6.1.4",
  "@vitest/ui": "^1.0.4",
  "jsdom": "^23.0.1"
}
```

---

## Quick Start

### Environment Setup

Test dependencies are configured in `package.json`. Configuration files include:
- `vitest.config.js`: Vitest configuration
- `vite.config.js`: Vite configuration
- `package.json`: Dependencies and scripts

### Project Structure

```
src/
├── utils/
│   ├── __tests__/
│   │   ├── colorParser.test.js (71 lines)
│   │   └── colorInterpolation.test.js (58 lines)
│   ├── colorParser.js
│   └── colorInterpolation.js
├── hooks/
│   ├── __tests__/
│   │   └── useColorHistory.test.js (241 lines)
│   └── useColorHistory.js
├── components/
│   └── __tests__/ (to be expanded)
└── ...
Root Directory/
├── docs/TESTING.md (this file)
├── vitest.config.js
├── package.json
└── ...
```

---

## Test Statistics

### ✅ Completion Status

Complete unit test coverage has been successfully added to the colormap_generator project.

### 📊 Test Overview

- **Total Tests**: 39 tests
- **Pass Rate**: 100% ✓
- **Coverage**: Core business logic (utilities + custom hooks)
- **Execution Time**: ~364ms

### Test Distribution

| Module | File | Tests | Status |
|--------|------|-------|--------|
| Color Parsing | colorParser.test.js | 15 | ✓ All passing |
| Color Interpolation | colorInterpolation.test.js | 9 | ✓ All passing |
| History Management | useColorHistory.test.js | 15 | ✓ All passing |

---

## Test Details

### 1. colorParser.test.js (15 tests)

**parseRGBAData Function (9 tests)**
- ✓ Parse 0-1 range RGB values
- ✓ Parse 0-255 range RGB values
- ✓ Parse RGBA values with alpha channel
- ✓ Correctly skip empty lines
- ✓ Correctly skip insufficient data lines
- ✓ Correctly skip non-numerical lines
- ✓ Handle values > 256
- ✓ Handle empty content
- ✓ Respect MAX_COLORS limit (1000)

**parseColorData Function (6 tests)**
- ✓ Parse color data with blank entries
- ✓ Remove leading empty lines
- ✓ Remove trailing empty lines
- ✓ Preserve internal blank entries
- ✓ Parse 0-255 range values
- ✓ Handle all-blank content

### 2. colorInterpolation.test.js (9 tests)

**interpolateColors Function**
- ✓ Interpolate between two colors
- ✓ Preserve first and last colors
- ✓ Return at least input number of colors
- ✓ Handle boundary cases (two similar colors)
- ✓ Handle cases where output count < input count
- ✓ Return integer RGB values
- ✓ Keep RGB values in valid range (0-255)
- ✓ Handle multiple intermediate colors
- ✓ Handle high RGB values

### 3. useColorHistory.test.js (15 tests)

**Initialization (3 tests)**
- ✓ History contains initial colormap on initialization
- ✓ Cannot undo on initialization
- ✓ Cannot redo on initialization

**addToHistory (3 tests)**
- ✓ Add new colormap to history
- ✓ Enable undo after adding
- ✓ Remove future states when adding after undo

**undo (3 tests)**
- ✓ Return previous colormap
- ✓ Cannot undo at beginning
- ✓ Enable redo after undo

**redo (3 tests)**
- ✓ Return next colormap
- ✓ Cannot redo at end
- ✓ Disable redo when at end

**State Boundaries (3 tests)**
- ✓ Not go below 0 when undoing multiple times
- ✓ Not exceed history length when redoing multiple times
- ✓ Maintain consistency in undo/redo cycles

---

## Common Commands

### Basic Commands

```bash
# Run all tests (single run)
npm test -- --run

# Run all tests (watch mode - auto-rerun on file changes)
npm test

# Run specific test file
npm test -- src/utils/__tests__/colorParser.test.js
npm test -- colorParser

# Run tests matching pattern
npm test -- --grep "parseRGBAData"
npm test -- --grep "should parse"

# Run tests matching multiple patterns
npm test -- --grep "parse|interpolate"
```

### Coverage and Reports

```bash
# Generate coverage report
npm run test:coverage

# Open Vitest UI dashboard (real-time test viewing)
npm run test:ui
```

### Debugging and Detailed Output

```bash
# Show detailed test output
npm test -- --reporter=verbose

# Show concise output
npm test -- --reporter=dot

# Stop at first failure
npm test -- --bail

# Run only previously failed tests
npm test -- --last-failed
```

---

## Writing New Tests

### Test File Naming Convention

- Place test files in `__tests__` folder at the same level as source files
- File name format: `[source-file].test.js`

### Basic Test Template

```javascript
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { functionToTest } from '../src/path/to/file';

describe('functionToTest', () => {
  beforeEach(() => {
    // Run before each test
  });

  afterEach(() => {
    // Run after each test
  });

  it('should do something specific', () => {
    // Arrange - prepare test data
    const input = ...;
    
    // Act - execute the code being tested
    const result = functionToTest(input);
    
    // Assert - verify the result
    expect(result).toBe(...);
  });

  describe('nested describe block', () => {
    it('should do something else', () => {
      // ...
    });
  });
});
```

### Common Assertions

```javascript
// Equality
expect(value).toBe(5);                    // strict equality
expect(value).toEqual(array);             // deep equality
expect(value).toStrictEqual(array);       // strict deep equality

// Truthiness
expect(value).toBeTruthy();
expect(value).toBeFalsy();

// Numbers
expect(value).toBeGreaterThan(5);
expect(value).toBeLessThanOrEqual(10);

// Arrays/Objects
expect(array).toHaveLength(3);
expect(obj).toHaveProperty('name');

// Exceptions
expect(() => throw new Error()).toThrow();
expect(() => throw new Error('message')).toThrow('message');

// Snapshots
expect(value).toMatchSnapshot();
```

---

## Best Practices

### 1. Test Structure (AAA Pattern)

```javascript
it('should calculate sum correctly', () => {
  // Arrange - prepare test data
  const a = 5;
  const b = 3;
  
  // Act - execute the code being tested
  const result = sum(a, b);
  
  // Assert - verify the result
  expect(result).toBe(8);
});
```

### 2. One Concept Per Test

```javascript
// ✓ Good
it('should parse 0-1 range RGB values correctly', () => {
  const result = parseRGBAData('0.5 0.5 0.5');
  expect(result[0]).toEqual([128, 128, 128, 1.0]);
});

// ✗ Bad - tests multiple concepts
it('should parse and interpolate colors', () => {
  const parsed = parseRGBAData('0.5 0.5 0.5');
  const interpolated = interpolateColors(parsed, 10);
  expect(parsed).toBeDefined();
  expect(interpolated).toBeDefined();
});
```

### 3. Descriptive Names

```javascript
// ✓ Good
it('should skip lines with non-numerical values', () => {});
it('should return empty array for empty content', () => {});

// ✗ Bad
it('test parsing', () => {});
it('should work', () => {});
```

### 4. Avoid Testing Implementation Details

```javascript
// ✓ Good - tests behavior
expect(result).toHaveLength(2);

// ✗ Bad - tests implementation
expect(internals.length).toBe(2);
```

---

## Troubleshooting

### Q: Test cannot find module

**A**: Check that import paths are correct. Relative paths should be relative from the `__tests__` directory.

```javascript
// ✓ Correct
import { myFunction } from '../myFunction';

// ✗ Wrong
import { myFunction } from '../src/utils/myFunction';
```

### Q: Test timeout

**A**: Increase timeout duration:

```javascript
it('slow test', async () => {
  // ...
}, 10000); // 10 second timeout
```

### Q: React Hook test error

**A**: Use `renderHook` and wrap state changes with `act`:

```javascript
const { result } = renderHook(() => useColorHistory(initial));
act(() => {
  result.current.addToHistory(newData);
});
```

### Q: How to debug tests

**A**: Add `debugger` statement and run:

```bash
npm test -- --inspect-brk
```

---

## Usage Examples

### Example 1: Continuous Testing During Development

```bash
# Enter watch mode - tests auto-run when you modify code
npm test

# Then edit files in VS Code
# You'll see tests automatically run and show results
```

### Example 2: Test Specific Features

```bash
# Test only color parsing
npm test -- colorParser

# Test only RGBA data parsing
npm test -- --grep "parseRGBAData"

# Test only empty line handling
npm test -- --grep "should skip empty lines"
```

### Example 3: Use UI Dashboard

```bash
# Open visual test dashboard
npm run test:ui

# Open http://localhost:51204 in your browser
# Real-time test execution, filtering, and search
```

### Example 4: Generate Coverage Report

```bash
npm run test:coverage

# Report generated to coverage/ directory
# Open coverage/index.html to view detailed report
```

---

## Advanced Techniques

### Snapshot Testing

```javascript
it('should match snapshot', () => {
  const result = complexFunction();
  expect(result).toMatchSnapshot();
});

// First run creates snapshot
// Subsequent runs compare against it
```

### Grouping and Nesting

```javascript
describe('Parser', () => {
  describe('RGBA parsing', () => {
    it('should handle 0-1 range', () => {});
    it('should handle 0-255 range', () => {});
  });
  
  describe('Color data parsing', () => {
    it('should handle blanks', () => {});
  });
});

// Run
npm test -- --grep "RGBA parsing"
```

### Conditional Skipping

```javascript
it.skip('should do something', () => {
  // This test will be skipped
});

it.only('should do something', () => {
  // Only this test will run
});
```

---

## Reference Resources

- 📖 [Vitest Official Documentation](https://vitest.dev/)
- 📖 [Jest Documentation](https://jestjs.io/)
- 📖 [Testing Library Documentation](https://testing-library.com/)
- 📖 [Assertion API Documentation](https://vitest.dev/api/expect.html)

---

## Summary

✅ Completed test coverage:
- Color parsing utilities (100% function coverage)
- Color interpolation utilities (100% function coverage)
- Color history management hook (100% function coverage)

⏳ To be expanded:
- React components (pending)
- Integration tests
- E2E tests

**Total: 39 unit tests** covering core business logic with 100% pass rate.
