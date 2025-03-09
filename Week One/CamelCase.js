"use strict"

/*

There is a sequence of words in CamelCase as a string of letters, s , having the following properties:

It is a concatenation of one or more words consisting of English letters.
All letters in the first word are lowercase.
For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.

Given ,s determine the number of words in s.
 */

function camelCase(s){
    let count = 1;
    for(let i = 0; i<s.length;i++){
        if(s[i] === s[i].toUpperCase()){

            count ++;
        }

    }
    return count;
}


const testCases = function(){
    return  [
        {input: "saveChangesInTheEditor", output: 5},
        {input: "oneTwoThree", output: 3}
    ]
}

const runTests = function(testCases){
    let count = testCases.length;
    for(let i =0;i< testCases.length;i++){

        let test = testCases[i];
        let output = camelCase(test.input);
        let expectedOutput = test.output;
        if(output === expectedOutput){
            count --;
            console.log(`Test Successfully Passed. Output -> ${output} === ${expectedOutput}`);
        }
        else{
            console.log(`Test Failed. Output -> ${output} !== ${expectedOutput}`);
        }

    }
    return count === 0;

}

const tests = testCases();
const result = runTests(tests)
if(result) {
    console.log(`SuccessfulLy Passed all tests`)
}
else{
    console.log("Some tests Failed")
}