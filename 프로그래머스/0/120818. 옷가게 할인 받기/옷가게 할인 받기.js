function solution(price) {
    var p = 0;
    
    if(price >= 500000) {
        p = 0.2;
    } else if (500000 > price && price >= 300000) {
        p = 0.1;
    } else if (300000 > price && price >= 100000) {
        p = 0.05;
    }
    
    return Math.floor(price * (1-p));
}