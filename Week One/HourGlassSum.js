"use strict"

//@TODO FINISH THIS EXERCISE
const matrix = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

function calculateHourGlass(row){
    let a = row[0][0]
    let b = row[0][1]
    let c = row[0][2]
    let d = row[1][1]
    let e = row[2][0]
    let f = row[2][1]
    let g = row[2][2]
    return a+b+c+d+e+f+g
}

function hourglassSum(matrix){
    let maxNumber = matrix[0][0]
    for(let row = 0;row<matrix.length-2;row++){

            if(calculateHourGlass(matrix)>maxNumber){
                maxNumber = calculateHourGlass(matrix);
            }

    }
    return maxNumber
}

let max_value = hourglassSum(matrix)
console.log(max_value)