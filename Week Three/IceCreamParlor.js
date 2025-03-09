"use strict"

function iceCreamParlor(m, arr){
   let map = new Map();
   let pairs = [];
   for(let i=0;i<arr.length;i++){
       let currentItem = arr[i];
       let difference = m - currentItem;
       if(map.has(difference)){
           return [map.get(difference), i+1];
       }
       if(!map.has(currentItem)){
           map.set(currentItem,i+1)
       }
   }
   return [];
}

const TestCases = () => [
    { input: { target: 6, arr: [1, 3, 4, 5, 6] }, output: [1, 4] },
    { input: { target: 9, arr: [2, 7, 11, 15] }, output: [1, 2] },
    { input: { target: 8, arr: [1, 3, 5, 2, 6] }, output: [2, 3] },
    { input: { target: 6, arr: [3, 3] }, output: [1, 2] },
    { input: { target: 7, arr: [4, 3, 3, 4] }, output: [1, 2] },
    { input: { target: 10, arr: [1, 2, 3, 7] }, output: [3, 4] },
    { input: { target: 0, arr: [-2, 2] }, output: [1, 2] },
    { input: { target: 1999, arr: [999, 1000, 2, 3] }, output: [1, 2] }
];


const runTest = function(test){
    let failedTests = 0;
    //console.log(test.input.target)
    for(let i = 0;i<test.length;i++){
        let iceCreamFlavors = test[i].input.arr
        let totalMoney = test[i].input.target
        let output = iceCreamParlor(totalMoney, iceCreamFlavors)
        for(let j = 0;j<output.length;j++){
            if(output[j] === test[i].output[j]){

                console.log(`Test Passed! ${output} == ${test[i].output}`)
            }
            else{
                failedTests ++;
                console.log(`Test Failed! ${output} !== ${test[i].output}`)
        }
        }

    }
    return failedTests === 0;
}
const tests = TestCases()
if(runTest(tests)){
    console.log("Passed all tests!!!");
}
else{
    console.log("Failed some tests")
}