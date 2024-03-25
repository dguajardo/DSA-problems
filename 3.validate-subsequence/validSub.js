const isValidSubsequenceOlogn = function(array, sequence) {
    let arrIdx = 0;
    let seqIdx = 0;
    while (arrIdx < array.length && seqIdx < sequence.length) {
        if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
        arrIdx++;
    }
    return seqIdx === sequence.length;
}

const isValidSubsequenceOn = function(array, sequence) {
    let counter = 0;
    array.forEach((num) => num == sequence[counter] && counter++)
    return counter == sequence.length;

}

const isValidSequenceOn_ = function(array, sequence) {
    let seqIdx = 0;

    for (let i = 0; i < array.length && seqIdx < sequence.length; i++) {
        if (array[i] === sequence[seqIdx]) {
            seqIdx++;
        }
    }

    return seqIdx === sequence.length;
}

// Do not edit the line below.

module.exports = {
    isValidSubsequenceOlogn,
    isValidSubsequenceOn,
    isValidSequenceOn_,
};