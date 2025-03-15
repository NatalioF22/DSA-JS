"use strict"

function gridTraveler(row, column, gridLocation = {}){
    if(column === 0 || row === 0){return 0;}
    if(column === 1 && row === 1){return 1;}
    const coordinate = row + "," + column;
    if(coordinate in gridLocation){return gridLocation[coordinate];}
    gridLocation[coordinate] = gridTraveler(row-1, column, gridLocation) + gridTraveler(row, column-1, gridLocation);
    return gridLocation[coordinate];
}

console.log(gridTraveler(4,3))

const testCases = function(){
    return [
        { coordinates: [2, 3], output: 3 },
        { coordinates: [3, 3], output: 6 },
        { coordinates: [4, 3], output: 10 },
        { coordinates: [1, 1], output: 1 },
        { coordinates: [0, 5], output: 0 },
        { coordinates: [5, 0], output: 0 },
        { coordinates: [15, 15], output: 40116600 }
    ];
};


function runTests(tests){
    let failedTests = 0;
    for(let i=0;i<tests.length;i++){
        let row = tests[i].coordinates[0];
        let column = tests[i].coordinates[1]
        console.log(tests[i].coordinates)
        let result = gridTraveler(row, column);
        const expectedOutput = tests[i].output;
        if(result === expectedOutput){
            console.log(`Passed Test. ${row}, ${column} => Has ${expectedOutput}. Your result = ${result}`)
        }
        else{
            failedTests ++;
        }
    }
    return failedTests;
}

const tests = testCases()
const result = runTests(tests);
if(result === 0){
    console.log("Passed all test CASES!!!")
}
else{
    console.log(`Failed ${result} test Cases`)
}
