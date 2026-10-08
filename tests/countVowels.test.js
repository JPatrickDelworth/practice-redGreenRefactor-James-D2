//Red

const countVowels = require('../countVowels.js')

describe ('countVowels', () => {
    test("A failing test in which the entered string contains no vowels", () => {
        expect(countVowels("rhythm")).toBe("No vowels present.")
    });
});