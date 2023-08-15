function solution(n) {
    var answer = 0;
    let cnt = 0;
    
    for(i=1; i<=n; i++){
        if(n%i === 0){
            cnt++
        }
    }
    
    answer = cnt;
    
    return answer;
}