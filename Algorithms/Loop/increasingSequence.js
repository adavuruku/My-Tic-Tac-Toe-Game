var findLengthOfLCIS = function(nums) {
    if(nums.length<=0) return 0
    let count = 1
    let max = 0
    for(let j = 0; j < (nums.length - 1); j++){
        if(nums[j] >= nums[j+1]){
            max = Math.max(max,count)
            count=1
        }else{
            count++
        }
    }
    return Math.max(Math.max(max,count))
};

console.log(findLengthOfLCIS([1,3,5,4,2,3,4,5,6]))

// 1,3 = 2
// [1,3]
// loop
// 3-5 difBf = 2 diff= 2
// [1,3,5]
// 5-6 = 1 difBf = 2 diff= 1
// []
// [6]
// 6-8 = 2 difBf = 2 diff= 2
// 8 - 11 = 3  difBf = 2 diff= 3

// for(let r =0 ; r<20; r++){
//     console.log(r)
//     r=r+1
// }