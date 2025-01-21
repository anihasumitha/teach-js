/*
Question:

Given the following variables:

let phrase = "   Hello, welcome to the world of JavaScript!   ";
let keyword = "JavaScript";


Answer the  following questions:
-----------------------------------------------------------
1. Find and print the first and last characters of the trimmed phrase using two different methods.
Substring Search:

2. Check if the phrase contains the keyword. Print true or false.
Starts and Ends Check:

3. Check if the trimmed phrase starts with "Hello" and ends with "!". Print the results for both checks.
Length Check:

4. Print the length of the trimmed phrase.

5. Convert the keyword to all uppercase and all lowercase, and print the results.
Formatted Sentence:

6.Using template literals, create and print the sentence:
"The phrase '[trimmed_phrase]' contains the keyword '[keyword]'."

*/

let phrase = "   Hello, welcome to the world of JavaScript!   ";
let keyword = "JavaScript";
let trimmedPhrase = phrase.trim()
/*
 * Question 1
 * @param {string} trimmedPhrase
 */
function findFirstAndLast(trimmedPhrase) {
    // Your code here
    let first = trimmedPhrase.charAt(0)
    let last = trimmedPhrase.charAt(trimmedPhrase.length - 1)

    // Do not touch the code below
    return [first, last]
};

/*
 * Question 2
 * @param {string} phrase
 * @param {string} keyword
 */
function containsKeyword(phrase, keyword) {
    // Your code here
    return phrase.includes(keyword);
};


/*
 * Question 3
 * @param {string} trimmedPhrase
 */
function checkStartAndEnd(trimmedPhrase) {
    // Your code here
    let checkStart = trimmedPhrase.startsWith("Hello");
    let checkEnd = trimmedPhrase.endsWith("!");

    // Do not touch the code below
    return [checkStart, checkEnd];
};


/*
 * Question 4
 * @param {string} trimmedPhrase
 */
function getLength(trimmedPhrase) {
    // Your code here
    let wordLength = trimmedPhrase.length;

    // Do not touch the code below
    return wordLength;
};


/*
 * Question 5
 * @param {string} keyword
 */
function convertKeywordCase(keyword) {
    // Your code here
    let keywordToUpper = keyword.toUpperCase();
    let keywordToLower = keyword.toLowerCase();
    
    // Do not touch code below
    return [keywordToLower, keywordToUpper];
};


/*
 * Question 6
 * @param {string} trimmedPhrase
 * @param {string} keyword
 */
function createFormattedSentence(trimmedPhrase, keyword) {
    // Your code here
    let sentence = `The phrase ${trimmedPhrase} contains the keyword ${keyword}`;
    return sentence;
};

console.log(createFormattedSentence(trimmedPhrase, keyword))

module.exports = {
    findFirstAndLast,
    containsKeyword,
    checkStartAndEnd,
    getLength,
    convertKeywordCase,
    createFormattedSentence,
};