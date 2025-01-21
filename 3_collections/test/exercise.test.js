const {
  addItemsToEnd,
  addItemToStart,
  removeLastItem,
  removeFirstItem,
  insertMilk,
  copyShoppingList,
  resetShoppingList,
  getShoppingList,
} = require("../exercise.js");

describe("Shopping List Module", () => {
  beforeEach(() => {
    resetShoppingList();
  });

  test("1. Add 'apples' and 'bananas' to the end of the shopping list", () => {
    addItemsToEnd();
    expect(getShoppingList()).toEqual(["apples", "bananas"]);
  });

  test("2. Should add 'bread' to the beginning of the shopping list", () => {
    addItemsToEnd();
    addItemToStart();
    expect(getShoppingList()).toEqual(["bread", "apples", "bananas"]);
  });

  test("3. Should remove the last item from the shopping list", () => {
    addItemsToEnd();
    removeLastItem();
    expect(getShoppingList()).toEqual(["apples"]);
  });

  test("4. Should remove the first item from the shopping list", () => {
    addItemsToEnd();
    removeFirstItem();
    expect(getShoppingList()).toEqual(["bananas"]);
  });

  test("5. Should insert 'milk' at the second position in the shopping list", () => {
    addItemsToEnd();
    insertMilk();
    expect(getShoppingList()).toEqual(["apples", "milk", "bananas"]);
  });

  test("6. Create a copy of the shopping list", () => {
    addItemsToEnd();
    const shoppingListCopy = copyShoppingList();
    expect(shoppingListCopy).toEqual(["apples", "bananas"]);
    expect(shoppingListCopy).not.toBe(getShoppingList());
  });

  test("7. Reset the shopping list to an empty array", () => {
    addItemsToEnd();
    resetShoppingList();
    expect(getShoppingList()).toEqual([]);
  });

  test("8. Should return the current state of the shopping list", () => {
    addItemsToEnd();
    expect(getShoppingList()).toEqual(["apples", "bananas"]);
  });
});
