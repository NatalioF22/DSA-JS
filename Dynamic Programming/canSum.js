"use strict"

function canSum(target, numbers, memo = {}){
    if(target in memo){return memo[target]}
    if(target === 0){return true;}
    if(target < 0){return false}

    for(let num of numbers){
        let result = target - num;

        if(canSum(result,numbers,memo)===true)
        {   memo[target] = true;
            return true; }

    }
    memo[target] = false;
    return false
}
//n = array length
//m target sum
//time complexity(m*n)
//space complexity(m)
console.log(canSum(7, [5, 3, 4, 7])); // true (7 is directly in the array)
console.log(canSum(7, [2, 4])); // false (you can't make 7 from these numbers)
console.log(canSum(301, [2, 4])); // false (you can't make 7 from these numbers)
console.log(canSum(300, [2, 4])); // false (you can't make 7 from these numbers)
