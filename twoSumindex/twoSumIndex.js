/**
 * @param {number[]} array
 * @param {number} target
 * @return {number[]}
 */
const twoSumIndexOn2 = function(array, target) {
    for (let i = 0; i < array.length; i++) {
        const first = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const second = array[j];
            if (first + second === target) {
                return [i, j];
            }
        }
    }
    return [];
}

const twoSumIndexOn = function(array, target) {
    const num = {};
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        if (num[target - current]) {
            return [array.indexOf(target - current), i];
        }
        num[current] = true;
    }
    return [];
};

const twoSumIndex_ = function(array, target) {
    const sortedArray = array.slice(0).sort((a, b) => a - b);
    let left = 0;
    let right = sortedArray.length - 1;
    while (left < right) {
        const currentSum = sortedArray[left] + sortedArray[right];
        if (currentSum === target) {
            return [
                array.indexOf(sortedArray[left]),
                array.indexOf(sortedArray[right]),
            ];
        } else if (currentSum < target) {
            left++;
        } else if (currentSum > target) {
            right--;
        }
    }
    return [];
};




module.exports = { twoSumIndexOn2, twoSumIndexOn, twoSumIndex_ };