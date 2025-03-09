"use strict"

function superDigit(n,k){
    let sum = 0;
    for(let digit of n){
        sum += Number(digit);
    }
    sum = sum*k;
    function getSuperDigit(num){
       if(num < 10){return num;}
        let newSum = 0;
       while(num >0){
           newSum += num % 10;
           num = Math.floor(num/10)

       }
        return getSuperDigit(newSum);

    }
    return getSuperDigit(sum);

}

const testCases = function(){
    return [
        {input:["148", 3], output: 3},
        {input:["593", 10], output: 8},
        {input:["98963", 100], output: 8},
        {input:["4757362", 10000], output: 7},
        {input:["861568688536788", 100000], output: 3},
        {input:["3546630947312051453014172159647935984478824945973141333062252613718025688716704470547449723886626736", 100000], output: 5},

    ]

}
function runTests(tests){
    let testFailed = 0;
    for(let i =0;i<tests.length;i++){
        const test = tests[i]
        let expectedResults = tests[i].output;
        let output = superDigit(...test.input)
        if(expectedResults === output){
            console.log(`Test ${i+1} Passed. Input=> ${tests[i].input} === Output: ${output}`)
            ;
        }
        else {
            console.log(`Test ${i + 1} Failed. Input=> ${tests[i].input} === Output: ${output}`)
            testFailed++;

        }
    }
    return testFailed === 0;

}

const expected_results = testCases();
const result = runTests(expected_results)
if(result){
    console.log("Passed all tests successfully");

}else {
    console.log("Failed some tests");
}