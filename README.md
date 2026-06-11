# Error Handling with Try...Catch in JavaScript

## Description

This project demonstrates how to use JavaScript's `try...catch` statement for error handling. The program validates function arguments before performing an addition operation.

If either argument is not a number, a `TypeError` is thrown and handled gracefully without stopping the execution of the program.

---

## Features

* Validates function inputs using `typeof`
* Throws custom `TypeError` exceptions
* Handles errors using `try...catch`
* Prevents application crashes due to invalid input
* Demonstrates that program execution continues after an error

---

## Code Overview

### Function: `addTwoNums(a, b)`

The function:

1. Accepts two arguments.
2. Checks whether both arguments are numbers.
3. Throws a `TypeError` if an invalid argument is detected.
4. Prints the sum when both arguments are valid.
5. Catches and logs any thrown errors.

### Example

```javascript
addTwoNums(7, "7");
```

Output:

```text
Error! TypeError: The second argument is not a number
```

The program then continues running:

```text
It still works
```

---

## Technologies Used

* JavaScript (ES6+)

---

## Learning Objectives

This project helps developers understand:

* Error handling in JavaScript
* The `try...catch` statement
* Throwing custom exceptions
* Input validation
* Program flow after exceptions

---

## Author
Soromtochukwu Ugwu
Created as a practice project for learning JavaScript error handling and exception management.
