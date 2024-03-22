const testCases = require("./testCases.json");
const {
    twoSumIndexOn,
    twoSumIndexOn2,
    twoSumIndex_
} = require("./twoSumIndex");

describe("Returns two sum numbers with a brute force two sum  algorithm complexity O(n^2) ", () => {
    it("should bring back the sum of 9", () => {
        expect(twoSumIndexOn2(testCases[0].input, testCases[0].target)).toEqual(
            testCases[0].expectedOutput
        );
    });
    it("should bring back the sum of 10", () => {
        expect(twoSumIndexOn2(testCases[1].input, testCases[1].target)).toEqual(
            testCases[1].expectedOutput
        );
    });

    it("should bring back the sum of 17", () => {
        expect(twoSumIndexOn2(testCases[2].input, testCases[2].target)).toEqual(
            testCases[2].expectedOutput
        );
    });

    it("should bring back the sum of 18", () => {
        expect(twoSumIndexOn2(testCases[3].input, testCases[3].target)).toEqual(
            testCases[3].expectedOutput
        );
    });

    it("should bring back the sum of -5", () => {
        expect(twoSumIndexOn2(testCases[4].input, testCases[4].target)).toEqual(
            testCases[4].expectedOutput
        );
    });

    it("should bring back the sum of 10", () => {
        expect(twoSumIndexOn2(testCases[5].input, testCases[5].target)).toEqual(
            testCases[5].expectedOutput
        );
    });

    it("should bring back the sum of 5", () => {
        expect(twoSumIndexOn2(testCases[6].input, testCases[6].target)).toEqual(
            testCases[6].expectedOutput
        );
    });

    it("should bring back the sum of 163", () => {
        expect(twoSumIndexOn2(testCases[7].input, testCases[7].target)).toEqual(
            testCases[7].expectedOutput
        );
    });

    it("should bring back the sum of 164", () => {
        expect(twoSumIndexOn2(testCases[8].input, testCases[8].target)).toEqual(
            testCases[8].expectedOutput
        );
    });
    it("should bring back the sum of 15", () => {
        expect(twoSumIndexOn2(testCases[9].input, testCases[9].target)).toEqual(
            testCases[9].expectedOutput
        );
    });
});
describe("Returns two sum numbers with a hash table complexity O(n)", () => {
    it("should bring back the sum of 9", () => {
        expect(twoSumIndexOn(testCases[0].input, testCases[0].target)).toEqual(
            testCases[0].expectedOutput
        );
    });
    it("should bring back the sum of 10", () => {
        expect(twoSumIndexOn(testCases[1].input, testCases[1].target)).toEqual(
            testCases[1].expectedOutput
        );
    });

    it("should bring back the sum of 17", () => {
        expect(twoSumIndexOn(testCases[2].input, testCases[2].target)).toEqual(
            testCases[2].expectedOutput
        );
    });

    it("should bring back the sum of 18", () => {
        expect(twoSumIndexOn(testCases[3].input, testCases[3].target)).toEqual(
            testCases[3].expectedOutput
        );
    });

    it("should bring back the sum of -5", () => {
        expect(twoSumIndexOn(testCases[4].input, testCases[4].target)).toEqual(
            testCases[4].expectedOutput
        );
    });

    it("should bring back the sum of 10", () => {
        expect(twoSumIndexOn(testCases[5].input, testCases[5].target)).toEqual(
            testCases[5].expectedOutput
        );
    });

    it("should bring back the sum of 5", () => {
        expect(twoSumIndexOn(testCases[6].input, testCases[6].target)).toEqual(
            testCases[6].expectedOutput
        );
    });

    it("should bring back the sum of 163", () => {
        expect(twoSumIndexOn(testCases[7].input, testCases[7].target)).toEqual(
            testCases[7].expectedOutput
        );
    });

    it("should bring back the sum of 164", () => {
        expect(twoSumIndexOn(testCases[8].input, testCases[8].target)).toEqual(
            testCases[8].expectedOutput
        );
    });
    it("should bring back the sum of 15", () => {
        expect(twoSumIndexOn(testCases[9].input, testCases[9].target)).toEqual(
            testCases[9].expectedOutput
        );
    });
});

describe("Returns two sum numbers with a two pointers and sort array  algorithm complexity O (Log n) ", () => {
    it("should bring back the sum of 9", () => {
        expect(twoSumIndex_(testCases[0].input, testCases[0].target)).toEqual(
            testCases[0].expectedOutput
        );
    });
    it("should bring back the sum of 10", () => {
        expect(twoSumIndex_(testCases[1].input, testCases[1].target)).toEqual(
            testCases[1].expectedOutput2
        );
    });

    it("should bring back the sum of 17", () => {
        expect(twoSumIndex_(testCases[2].input, testCases[2].target)).toEqual(
            testCases[2].expectedOutput
        );
    });

    it("should bring back the sum of 18", () => {
        expect(twoSumIndex_(testCases[3].input, testCases[3].target)).toEqual(
            testCases[3].expectedOutput
        );
    });

    it("should bring back the sum of -5", () => {
        expect(twoSumIndex_(testCases[4].input, testCases[4].target)).toEqual(
            testCases[4].expectedOutput
        );
    });

    it("should bring back the sum of 10", () => {
        expect(twoSumIndex_(testCases[5].input, testCases[5].target)).toEqual(
            testCases[5].expectedOutput
        );
    });

    it("should bring back the sum of 5", () => {
        expect(twoSumIndex_(testCases[6].input, testCases[6].target)).toEqual(
            testCases[6].expectedOutput2
        );
    });

    it("should bring back the sum of 163", () => {
        expect(twoSumIndex_(testCases[7].input, testCases[7].target)).toEqual(
            testCases[7].expectedOutput
        );
    });

    it("should bring back the sum of 164", () => {
        expect(twoSumIndex_(testCases[8].input, testCases[8].target)).toEqual(
            testCases[8].expectedOutput
        );
    });
    it("should bring back the sum of 15", () => {
        expect(twoSumIndex_(testCases[9].input, testCases[9].target)).toEqual(
            testCases[9].expectedOutput
        );
    });
});