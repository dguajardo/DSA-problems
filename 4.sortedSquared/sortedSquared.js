function sortedSquaredArray1(array) {
    return array.map((item) => item * item).sort((a, b) => a - b);
}

function sortedSquaredArray2(array) {
    let positiveIdx = 0;

    while (positiveIdx < array.length) {
        array[positiveIdx] = array[positiveIdx] * array[positiveIdx];

        positiveIdx++;
    }
    array.sort(function(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
    return array;
}

function sortedSquaredArray3(array) {
    array.sort((a, b) => a - b);
    return array.forEach((num) => num * num);
    //O(n)
}

const sortedSquaredArray = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let count = right;

    const squares = new Array(nums.length);

    while (count > 0) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            squares[count] = nums[left] * nums[left];
            left++;
        } else {
            squares[count] = nums[right] * nums[right];
            right--;
        }

        count--;
    }

    if (count == 0) return nums;
};

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;