function addTwoNums(a, b) {

    // try...catch for error handling
    try {
        // checking if the inputs are strictly numbers 
        if (typeof a !== 'number') {
            throw new TypeError('The first argument is not a number');// for checking type error
        } else if (typeof b !== 'number') {
            throw new TypeError('The second argument is not a number');
        } else {
            console.log(a + b);
        }
    } catch (err) {
        console.log('Error!', err)
        // console.log(err.name)
        // console.log(err.message)
        // console.log(err.stack)
    }



}

// involking the function
addTwoNums(7, '7');

console.log('it still works')