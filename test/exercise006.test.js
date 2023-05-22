import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
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

describe("getComplementaryDNA", () => {
    test("returns string complementary string t->a c->G", () => {
      expect(getComplementaryDNA("CGTA")).toBe("GCAT");
      expect(getComplementaryDNA("NCGTA")).toBe(null);
      expect(getComplementaryDNA("CCCGTAAAA")).toBe("GGGCATTTT");
    });
  
    test("returns null if empty array", () => {
      expect(getComplementaryDNA("")).toBe(null);
    });
});

describe("isItPrime", () => {
    test("returns true if prime Number", () => {
      expect(isItPrime(1)).toBe(false);
      expect(isItPrime(2)).toBe(true);
      expect(isItPrime(5)).toBe(true);
      expect(isItPrime(37)).toBe(true);
      expect(isItPrime(39)).toBe(false);
    });
  
    test("returns false if 0", () => {
      expect(isItPrime(0)).toBe(false);
    });
});

describe("createMatrix", () => {
    test("returns n by n size Matrix with fill item second parameter", () => {
      expect(createMatrix(2,"foo")).toEqual([["foo","foo"],["foo","foo"]]);
      expect(createMatrix(3,3)).toEqual([[3,3,3],[3,3,3],[3,3,3]]);
    });

    test("returns empty array", () => {
      expect(createMatrix(0,"foo")).toEqual([]);
    });
});


describe("areWeCovered", () => {
    test("returns true if 3 members of staff present for certain day", () => {
        const staff= [
            { name: "Sally", rota: ["Saturday","Monday", "Tuesday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Daniel", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Sara", rota:["Monday"]}
            ];
        
        expect(areWeCovered(staff, "Saturday")).toBe(true);
        expect(areWeCovered(staff, "Friday")).toBe(false);
    });
});
       
