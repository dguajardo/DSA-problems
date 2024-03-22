function twoSum_On2(array, target) {
    for (let i = 0; i < array.length; i++) {
        const first = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const second = array[j];
            if (first + second === target) {
                return [first, second];
            }
        }
    }
    return [];

}
module.exports = twoSum_On2;