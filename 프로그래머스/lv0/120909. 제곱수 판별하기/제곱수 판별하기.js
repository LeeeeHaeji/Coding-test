function solution(n) {
    var answer = 0;
    let num = 0;
    
    for(i=1; i<=n; i++){
        if(n%i === 0){
            if(i * i === n){
                num = i;
            }
        }
    }
    
    (num === 0) ? answer = 2 : answer = 1;
    
    return answer;
}