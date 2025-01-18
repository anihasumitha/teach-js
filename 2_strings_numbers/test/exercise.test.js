const studentSolution = require("../exercise.js");

describe("Strings and Numbers excercise", () => {
  const phrase = "  Hello, welcome to the world of JavaScript!";
  const keyword = "JavaScript";
  const trimmedPhrase = phrase.trim();

  test("1. Find and return the first and last characters of the trimmed phrase.", () => {
    expect(studentSolution.findFirstAndLast(trimmedPhrase)).toEqual(["H", "!"]);
  });

  test("2. Check if the phrase contains the keyword.", () => {
    expect(studentSolution.containsKeyword(phrase, keyword)).toBe(true);
  });

  test("3. Check if the trimmed phrase starts with 'Hello' and ends with '!'.", () => {
    expect(studentSolution.checkStartAndEnd(trimmedPhrase)).toEqual([
      true,
      true,
    ]);
  });

  test("4. Return the length of the trimmed phrase.", () => {
    expect(studentSolution.getLength(trimmedPhrase)).toBe(42);
  });

  test("5. Convert the keyword to uppercase and lowercase.", () => {
    expect(studentSolution.convertKeywordCase(keyword)).toEqual([
      "javascript",
      "JAVASCRIPT",
    ]);
  });

  test("6. Create and return a formatted sentence", () => {
    expect(
      studentSolution.createFormattedSentence(trimmedPhrase, keyword)
    ).toBe(
      "The phrase Hello, welcome to the world of JavaScript! contains the keyword JavaScript"
    );
  });
});
