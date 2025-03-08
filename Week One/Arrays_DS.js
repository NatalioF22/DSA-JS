"use strict"

function reverseArray(arr){
    let firstIndex = 0;
    let lastIndex = arr.length -1;
    while(firstIndex < lastIndex){
        [arr[firstIndex], arr[lastIndex]] = [arr[lastIndex],arr[firstIndex]];
        firstIndex++
        lastIndex--;
    }
    return arr;
}

let TesCases = function(){
    const inputOne = [1,2,3,4,5,6,7,8,9];
    const expectedOutputOne = [9,8,7,6,5,4,3,2,1]

    const inputTwo = [10,20,30,40];
    const expectedOutputTwo = [40,30,20,10]

    const inputThree = [341,267,3,4,5,6,7,8,9];
    const expectedOutputThree = [9,8,7,6,5,4,3,267,341]

    return [
        {input: inputOne, expected: expectedOutputOne},
        {input: inputTwo, expected: expectedOutputTwo},
        {input: inputThree, expected: expectedOutputThree}
    ]



}
const runTests = function(testCases){
    let count = testCases.length;
    for(let i =0;i<testCases.length;i++){

        const test = testCases[i]
        let output =  reverseArray([...test.input])
        let expectedOutput = testCases[i]["expected"]
        let localComparison ;
        for(let j = 0;j<output.length;j++){
            if(output[j] === expectedOutput[j]) {
                localComparison = true
            }
        }
        if(localComparison){
            count --;
            console.log(`Test Successfully Passed.\nMy output ${output} => ${expectedOutput}`);
        }
        else{
                localComparison = false;

            console.log(`Test Failed.\nMy output ${output} != ${expectedOutput}`)
            }


    }
    if(count ===0){
        return true;

    }
    return false;


}

const testCases = TesCases()
let result = runTests(testCases)
if(result) {
    console.log("All tests successfully Passed");
}
else{
    console.log("Some tests Failed")
}