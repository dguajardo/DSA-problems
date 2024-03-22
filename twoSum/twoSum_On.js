function twoSum_On(array, target) {
    const num = {};
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        if (num[target - current]) {
            return [target - current, current];
        }
        num[current] = true;
    }
    return [];
}
module.exports = twoSum_On;