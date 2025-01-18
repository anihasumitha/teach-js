/*
Exercise 1

1. Use a prompt box to ask for a user's name and the use a template literal
to insert their name into a personlozed "hello" message in an alert box
HINT: name = "John" -> 
`My name is ${name}`

2. Make changes to step 1 to log the length of the name
*/

function personalizedHello() {
    // Your code here
    const name = prompt("What is your name?");
    
    // Do not touch code below
    if (name) {
        // Your code here
        alert(`Hello, ${name}!`);
        console.log(`The length of the name is ${name.length}`);
    } // Do not touch code below
    else {
        alert("No name provided!");
    }
}
module.exports = {personalizedHello}