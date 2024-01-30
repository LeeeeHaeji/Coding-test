function solution(dots) {
    var answer = 0;
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots
    
    if((y2-y1)/(x2-x1) === (y4-y3)/(x4-x3)){
        answer = 1;
    } else if((y3-y1)/(x3-x1) === (y4-y2)/(x4-x2)) {
        answer = 1;
    } else if((y4-y1)/(x4-x1) === (y3-y2)/(x3-x2)) {
        answer = 1;
    }
    
    return answer;
}