'use strict';

const Stack = require('../stacksAndQueues/stacks-and-queues').Stack;


function multiBracketValidation(input) {
    const stack = new Stack();

    for (let i = 0; i < input.length; i++) {
        if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
            stack.push(input[i]);
        }
        if (input[i] === ')' || input[i] === ']' || input[i] === '}') {
            const leftBracket = stack.pop();
            if (leftBracket === '(' && input[i] !== ')') {
                console.log(false);
                return false;
            }
            if (leftBracket === '[' && input[i] !== ']') {
                console.log(false);
                return false;
            }
            if (leftBracket === '{' && input[i] !== '}') {
                console.log(false);
                return false;
            }
        }
    }
    if (stack.length > 0) {
        console.log(false);
        return false;
    }

    console.log(true);
    return true;
};

// multiBracketValidation('[({')
// multiBracketValidation('{(})')

// multiBracketValidation('[{}]')
// multiBracketValidation('()[[Extra Characters]')
// multiBracketValidation('()[]]')


module.exports = multiBracketValidation;