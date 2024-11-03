const index = require('./index');

// test for sum function
test('Properly adds two numbers', () => {
    expect(index.sum(1,2)).toBe(3);
})

// test for difference function
test('Properly subtracts two numbers', () => {
    expect(index.difference(5, 4)).toBe(1);
})

// test for product function
test('Properly multiplies two numbers', () => {
    expect(index.product(5,4)).toBe(20);
})

// test for quotient function
test('Properly divides two numbers', () => {
    expect(index.quotient(12, 6)).toBe(2);
})