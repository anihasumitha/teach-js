# Teach-JS  

This repository contains all the files required for the class:  
- A teaching file (`module_number.js`) with examples and explanations.  
- An exercise file (`exercise.js`) to practice the concepts.  
- An `index.html` file to test and run the JavaScript code in a browser.  

---

## Folder Structure  

Each folder in this repository represents a module. Below is the structure of a typical module:  

```
teach-js/
├── module_1.js       // Teaching file 
├── exercise.js       // Student solution file
├── test/
│   └── exercise.test.js  // Test file with expected outputs
├── index.html        // HTML file for testing in the browser
├── package.json      // Node.js project file for dependencies and scripts
└── README.md         // Instructions

```

---

## How to Use  

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/Joboa/teach-js.git
   cd teach-js
   ```

2. **Navigate to a Module**  
   Go to the folder of the module you want to learn. For example:  
   ```bash
   cd module_1
   ```

3. **Open `index.html` in a Browser**  
   Use your preferred browser to open the `index.html` file. This will allow you to run and test the JavaScript code.  

4. **Learn and Practice**  
   - Start with `module_number.js` to learn the concept.  
   - Open `exercise.js` to practice.  

5. **Refer to Exercise section to do the exercise**

---

## Exercise 
Follow the steps below to check your solution
```bash
   cd module_1/
   npm test // Run test for all exercises

   Or

   npm test -- teach-js/module_1/test  // Runs test for only module_1
   ``` 

### Caution 
Do not modify any script in `test/` folder

## Reference Book
Learn to code with javascript by Darren Jones

 