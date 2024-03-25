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

const twoSumIndex_ = function(nums, target) {
    const numObjects = nums.map((num, index) => ({ num, index }));

    numObjects.sort((a, b) => a.num - b.num);

    let left = 0;
    let right = numObjects.length - 1;

    while (left < right) {
        const sum = numObjects[left].num + numObjects[right].num;

        if (sum === target) {
            return [numObjects[left].index, numObjects[right].index];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
};




module.exports = { twoSumIndexOn2, twoSumIndexOn, twoSumIndex_ };