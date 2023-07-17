function solution(n) {
    var answer = 0;
    var min = n;
    
    for(i=0; i<n; i++){
        if(n%i === 1){
            if(i < min){
                min = i;
            }
        }
    }
    
    answer = min;
    
    return answer;
}