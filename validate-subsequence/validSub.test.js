const testCases = require("./testCases.json");
const { isValidSubsequenceOlogn, isValidSubsequenceOn, isValidSubsequenceOn_ } = require("./validSub");

describe("Returns a boolean value to validate sequence  algorithm complexity O(n) ", () => {
    for (let i = 0; i < testCases.length; i++) {
        it("validate sequence O(n)#", () => {
            expect(
                isValidSubsequenceOn(testCases[i].arr, testCases[i].sequence)
            ).toBe(testCases[i].expected);
        });
    }
});

describe("Returns a boolean value to validate sequence  algorithm complexity O(log n) ", () => {
    for (let i = 0; i < testCases.length; i++) {
        it("validate sequence O(log n)#", () => {
            expect(
                isValidSubsequenceOlogn(testCases[i].arr, testCases[i].sequence)
            ).toBe(testCases[i].expected);
        });
    }
});

describe("Returns a boolean value to validate sequence  algorithm complexity O(n + m) ", () => {
    for (let i = 0; i < testCases.length; i++) {
        it("validate sequence O(n + m)#", () => {
            expect(
                isValidSubsequenceOn_(testCases[i].arr, testCases[i].sequence)
            ).toBe(testCases[i].expected);
        });
    }
});