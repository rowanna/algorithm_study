/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let returnIdxArr = []
    const cloneArr = nums.slice()

    nums.forEach((el, idx) => {
        const testVal = target - el
        // const exceptArr = cloneArr.splice(0,idx)
        // if(nums.includes(testVal) && exceptArr.includes(testVal)) {
        // if(nums.includes(testVal)) {
        //     returnIdxArr.push(idx)
        // }

        nums.forEach((el2, idx2)=> {
            if(idx === idx2) return
            if(nums[idx] + el2 === target) {
                returnIdxArr = [idx, idx2]
            }
        })

    })
    returnIdxArr.sort()

    return returnIdxArr

};