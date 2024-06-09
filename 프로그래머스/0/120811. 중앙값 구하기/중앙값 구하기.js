function solution(array) {
    array.sort((a, b) => a - b);
    var idx = Math.floor(array.length / 2);
    return array[idx];
}