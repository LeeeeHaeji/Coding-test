function solution(angle) {
    var answer = 0;
    
    (angle === 180) ? answer = 4 : ((180 > angle) && (angle > 90)) ? answer = 3 : (angle === 90) ? answer = 2 : answer = 1;
    
    return answer;
}