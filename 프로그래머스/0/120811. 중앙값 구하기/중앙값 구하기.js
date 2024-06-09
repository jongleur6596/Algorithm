function solution(array) {
    // 기본 array.sort() 만 사용할 경우 숫자형식으로 오름차순이 아니라 문자열형식으로 오름차순 정렬 되어버림
    //    (ex. [1, 200, 34, 12] => [1, 12, 200, 34] 로 정렬)
    // 따라서, 숫자형식으로 정렬해주기 위해서는 sort 안에 함수를 넣어줘야함!
    return array[Math.floor(array.sort((a, b) => a - b).length / 2)];
}