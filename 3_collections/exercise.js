/*
Part 1: Shopping List Builder
Create a variable called shoppingList that starts as an empty array.
    Perform the following operations on shoppingList in the given order:
    1)Add "apples" and "bananas" to the end of the list.
    2)Add "bread" to the beginning of the list.
    3)Remove the last item from the list.
    4)Remove the first item from the list.
    5)Insert "milk" at the second position in the list.
    6)Create a new array called shoppingListCopy that is a copy of shoppingList.
*/

let shoppingList = [];

module.exports = {
  /**
   * Adds "apples" and "bananas" to the end of the shopping list.
   */
  addItemsToEnd: () => {
    // Your code here


    // Do not touch code below
    return shoppingList;
  },

  /**
   * Adds "bread" to the beginning of the shopping list.
   */
  addItemToStart: () => {
    // Your code here


    // Do not touch code below
    return shoppingList;
  },

  /**
   * Removes the last item from the shopping list.
   */
  removeLastItem: () => {
    // Your code here


    // Do not touch code below
    return shoppingList;
  },

  /**
   * Removes the first item from the shopping list.
   */
  removeFirstItem: () => {
    // Your code here


    // Do not touch code below
    return shoppingList;
  },

  /**
   * Inserts "milk" at the second position in the shopping list.
   */
  insertMilk: () => {
    // Your code here


    // Do not touch code below
    return shoppingList;
  },

  /**
   * Creates a copy of the shopping list using the spread operator.
   * @returns {string[]} A new array that is a copy of the shopping list.
   */
  copyShoppingList: () => {
    // Your code here

    // Do not touch code below
    return shoppingListCopy;
  },

  /********************* Do not touch code below ***************************
   * Resets the shopping list to an empty array.
   * For testing or resetting.
   */
  resetShoppingList: () => {
    shoppingList = [];
    return shoppingList;
  },

  /**
   * Returns the current state of the shopping list.
   * @returns {string[]} The current shopping list.
   */
  getShoppingList: () => {
    return shoppingList;
  },
  // *********************** Do not touch code above ***************************
};


/*
Part 2: Word Collector
Use three prompt boxes to ask the user for three different words.
    1)The first word should be "apple".
    2)The second word should be "banana".
    3)The third word should be "cherry".
    4)Store these words in an array called words.
    5)Use an alert box to display the array in this format:
    6)Here are your words: apple, banana, cherry
*/
