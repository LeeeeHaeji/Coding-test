function solution(x, n) {
    var answer = [];
    var data = x;
    
    for(i=0; i<n; i++){
        answer[i] = x;
        x += data;
    }
    return answer;
}