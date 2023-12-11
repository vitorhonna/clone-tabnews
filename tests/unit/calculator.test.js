const calculator = require("../../models/calculator.js");

// describe("Calculator", () => {
//   describe("add", () => {
//     it("should add two numbers", () => {
//       const result = calculator.add(1, 2);
//       expect(result).toBe(3);
//     });
//   });
// });

// Test if 2 + 2 = 4
test("two-plus-two-is-four", () => {
  const result = calculator.add(2, 2);
  expect(result).toBe(4);
});

// Test if 2 + 2 != 5
test("two-plus-two-is-not-five", () => {
  const result = calculator.add(2, 2);
  expect(result).not.toBe(5);
});

// Test if 5 + 100 = 105
test("five-plus-one-hundred-is-one-hundred-five", () => {
  const result = calculator.add(5, 100);
  expect(result).toBe(105);
});

// ChatGPT:
// add.test.js
describe('add function', () => {
  // Test case 1
  test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  // Test case 2
  test('adds -1 + 5 to equal 4', () => {
    expect(calculator.add(-1, 5)).toBe(4);
  });

  // Test case 3
  test('adds 0 + 0 to equal 0', () => {
    expect(calculator.add(0, 0)).toBe(0);
  });

  // Test case 4
  test('adds decimal numbers 2.5 + 3.5 to equal 6', () => {
    expect(calculator.add(2.5, 3.5)).toBe(6);
  });

  // Test case 5
  test('adds negative decimal numbers -2.5 + 3.5 to equal 1', () => {
    expect(calculator.add(-2.5, 3.5)).toBe(1);
  });

  // Test case 6
  test('adds large numbers 1000000000 + 2000000000 to equal 3000000000', () => {
    expect(calculator.add(1000000000, 2000000000)).toBe(3000000000);
  });

  // Additional tests can be added based on different scenarios

  // Edge case 1
  test('handles NaN gracefully', () => {
    expect(calculator.add(NaN, 5)).toBe(NaN);
  });

  // Edge case 2
  test('handles undefined values gracefully', () => {
    expect(calculator.add(undefined, 5)).toBeNaN();
  });
});

// Bard:
describe('add function', () => {
  // Addition of positive numbers
  it('should add two positive numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(5, 10)).toBe(15);
    expect(calculator.add(100, 200)).toBe(300);
  });

  // Addition of negative numbers
  it('should add two negative numbers', () => {
    expect(calculator.add(-1, -2)).toBe(-3);
    expect(calculator.add(-5, -10)).toBe(-15);
    expect(calculator.add(-100, -200)).toBe(-300);
  });

  // Addition of zero
  it('should add zero to any number', () => {
    expect(calculator.add(0, 1)).toBe(1);
    expect(calculator.add(10, 0)).toBe(10);
    expect(calculator.add(-100, 0)).toBe(-100);
    expect(calculator.add(0, -5)).toBe(-5);
    expect(calculator.add(0, 0)).toBe(0);
  });

  // Addition with decimal numbers
  it('should add decimal numbers', () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3, 6);
    expect(calculator.add(-1.5, 2.3)).toBeCloseTo(0.8, 6);
    expect(calculator.add(10.5, 0.0)).toBeCloseTo(10.5, 6);
  });

  // Edge cases
  it('should handle NaN inputs', () => {
    expect(calculator.add(NaN, 1)).toBeNaN();
    expect(calculator.add(1, NaN)).toBeNaN();
    expect(calculator.add(NaN, NaN)).toBeNaN();
  });

  it('should handle Infinity inputs', () => {
    expect(calculator.add(Infinity, 1)).toBe(Infinity);
    expect(calculator.add(1, Infinity)).toBe(Infinity);
    expect(calculator.add(Infinity, Infinity)).toBe(Infinity);
    expect(calculator.add(-Infinity, 1)).toBe(-Infinity);
    expect(calculator.add(1, -Infinity)).toBe(-Infinity);
    expect(calculator.add(-Infinity, -Infinity)).toBe(-Infinity);
  });

  // Error handling
  it('should throw an error if non-number arguments are provided', () => {
    expect(() => calculator.add('a', 1)).toThrow('Invalid input: both inputs must be numbers');
    expect(() => calculator.add(1, 'b')).toThrow('Invalid input: both inputs must be numbers');
  });
});
