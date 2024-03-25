function twoSum_(array, target) {
    const sortedArray = array.sort((a, b) => a - b);
    let left = 0
    let right = sortedArray.length - 1;
    while (left < right) {
        const currentSum = sortedArray[left] + sortedArray[right];
        if (currentSum === target) {
            return [sortedArray[left], sortedArray[right]];
        } else if (currentSum < target) {
            left++;
        } else if (currentSum > target) {
            right--;
        }
    }
    return [];
}
module.exports = twoSum_;