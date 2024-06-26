#!/usr/bin/node
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers for integer inputs', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return the sum of rounded numbers for one decimal place inputs', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return the sum of rounded numbers for two decimal place inputs', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return the sum of rounded numbers for fractional and integer inputs', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
