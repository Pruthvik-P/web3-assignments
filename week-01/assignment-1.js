const crypto = require('crypto');

/* 

What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?

A: You will have to brute force until you find a value that starts with 00000 


sample input and output

Input: 596138
Output: 00000691457f4f0ce13e187b9ab4fda6d42c8647752909b8f71f9dbd8f6bd4ab

*/

// Function to find an input string that produces a hash starting with '00000'
function findHashWithPrefix(prefix) {
    // initilize input with the correct value.
    
    let input = 0; // change here
    while (true) {
       // logic here
       let inputStr = input.toString();
       let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
       if(hash.startsWith(prefix)){
        return {input: inputStr, hash: hash};
       } 
       input++;
    }
}

// Find and print the input string and hash
const result = findHashWithPrefix('00000');
console.log(`Input: ${result.input}`);
console.log(`Output Hash: ${result.hash}`);