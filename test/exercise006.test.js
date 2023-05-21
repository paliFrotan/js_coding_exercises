import {
  sumMultiples,
  /*isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,*/
} from "../challenges/exercise006";

describe("someMultiples", () => {
  test("returns sum of any multiples of 3 or 5", () => {
    expect(sumMultiples([3,5,15])).toBe(23);
  });

  test("returns null if empty string", () => {
    expect(sumMultiples([])).toBe(null);
  });
});

