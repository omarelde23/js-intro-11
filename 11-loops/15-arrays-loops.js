// Find the sum of first 3 and last 3 elements
const nums = [ 1, 5, 7, 2, 3, 4, 9, 4, 5, 2, 1, 0, 10, 3, 5 ];
let sum1 = 0
let sum2 = 0 

for(let i = 0; i <= 2; i++) {
    sum1 += nums[i]
}


for(let i = nums.slice(-3); i < nums.length; i++) {
    sum2 += sum1
}


console.log(sum2)
