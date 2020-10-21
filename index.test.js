const { test, expect } = require("@jest/globals");
const { solution1, solution2 } = require(".");

const LIST = [1,2,5,7];

test.each([[LIST, 1, false], [LIST, 3, true], [LIST, 7, true], [LIST, 10, false]])(`[이중 for문] solution1(%p, %p)은 %p`, (list, s, result) => {
    expect(solution1(list, s)).toBe(result);
});

test.each([[LIST, 1, false], [LIST, 3, true], [LIST, 7, true], [LIST, 10, false]])(`[for문 + object] solution2(%p, %p)은 %p`, (list, s, result) => {
    expect(solution2(list, s)).toBe(result);
});