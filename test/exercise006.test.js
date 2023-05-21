import {
  sumMultiples,
  isValidDNA,
  /*getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,*/
} from "../challenges/exercise006";

describe("someMultiples", () => {
  test("returns sum of any multiples of 3 or 5", () => {
    expect(sumMultiples([3,5,15])).toBe(23);
    expect(sumMultiples([3,5,2,7,15])).toBe(23);
    expect(sumMultiples([2,7,4])).toBe(0);
  });

  test("returns zero if empty array", () => {
    expect(sumMultiples([])).toBe(0);
  });
});

describe("isValidDNA", () => {
    test("returns true if contains only CGTA", () => {
      expect(isValidDNA("CGTA")).toBe(true);
      expect(isValidDNA("NCGTA")).toBe(false);
      expect(isValidDNA("CCCGTAAAA")).toBe(true);
    });
  
    test("returns false if empty array", () => {
      expect(isValidDNA("")).toBe(false);
    });
  });

