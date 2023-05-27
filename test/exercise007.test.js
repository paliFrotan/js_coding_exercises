import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} from "../challenges/exercise007-optional";

describe("sumDigits", () => {
  test("returns sum of all the digits", () => {
    expect(sumDigits(12345)).toBe(15);
    expect(sumDigits(352715)).toBe(23);
    expect(sumDigits(2)).toBe(2);
  });
});

describe("createRange", () => {
    test("returns array of range of numbers", () => {
      expect(createRange(1,5,1)).toEqual([1,2,3,4,5]);
      expect(createRange(2,7,2)).toEqual([2,4,6]);
      expect(createRange(9,2,3)).toEqual([]);
    });
});

describe("getScreentimeAlertList", () => {
  const users = [
    {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
                     { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                     { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                     { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                     { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                    ]
       },
       {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
                     { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                     { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                     { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                    ]
       },
     ];
    test("returns users with time>100 for usage total ", () => {
      expect(getScreentimeAlertList(users,"2019-05-04")).toEqual(["beth_1234"]);
      expect(getScreentimeAlertList(users,"2019-05-03")).toEqual([]);
    });
});

describe("hexToRGB", () => {
    test("returns rgb from hexadecimal color code", () => {
      expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
      expect(hexToRGB("#FFFFFF")).toBe("rgb(255,255,255)");
      expect(hexToRGB("#000000")).toBe("rgb(0,0,0)");
    });
  
    test("returns null if empty", () => {
      expect(hexToRGB("")).toBe(null);
    });
});

describe("findWinner", () => {
    test("returns winner in noughts and crosses board array", () => {
      expect(findWinner([
         ["X", "0", null],
         ["X", null, "0"],
         ["X", null, "0"]
         ])).toBe("X");
      expect(findWinner([
          ["0", "X", null],
          [null,"0",  "X"],
          ["X", null, "0"]
          ])).toBe("0");
      expect(findWinner([
            ["X", "0", "X"],
            ["X", "0", "X"],
            ["0", "X", "0"]
            ])).toBe(null);
    });
});
