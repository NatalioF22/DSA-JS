"use strict"

function fib(n, results = {}){

    if(n in results){return results[n];}
    if(n <=2){return 1;}

    results[n] = fib(n-1, results) + fib(n-2, results)
    return results[n];
}

function testCases(){
    return  [
        { input: 1, output: 1 },
        { input: 2, output: 1 },
        { input: 3, output: 2 },
        { input: 5, output: 5 },
        { input: 10, output: 55 },
        { input: 20, output: 6765 },
        { input: 30, output: 832040 },
        { input: 50, output: 12586269025 }
    ];


}

testCases();
function runTests(tests){
    let failedCases = 0;
    for(let i=0;i<tests.length;i++){

        let result = fib(tests[i].input)
        let expectedOutput = tests[i].output
        if(result !== expectedOutput){
            failedCases ++;
            console.log(`Test Failed: ${result} !== ${expectedOutput}`)
        }else{
            console.log(`Test Passed: ${result} === ${expectedOutput}`)
        }

    }
    return failedCases;
}

const tests = testCases()
const testResult = runTests(tests)
if(testResult === 0){
    console.log("Passed all test Cases");
}
else{
    console.log("Failed some test Cases")
}