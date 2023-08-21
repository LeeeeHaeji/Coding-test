function solution(n) {
    var answer = 0;
    let num = 1;
    let cnt = 0;
    
    while(n >= num){
        cnt ++;
        num = num * cnt;
    }
    
    answer = cnt -1;
    
    return answer;
}