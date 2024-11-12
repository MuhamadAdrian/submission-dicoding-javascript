import { test, expect } from "node:test"
import assert from 'node:assert';
import { sum } from './index.js'

test('Returning correct value', () => {
  const valueA = 2;
  const valueB = 3;

  const expectedResult = valueA + valueB;

  const result = sum(valueA, valueB);

  assert.equal(expectedResult, result);
})