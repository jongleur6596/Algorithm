function solution(array, height) {    
    return array.sort().filter(e => e > height).length;
}