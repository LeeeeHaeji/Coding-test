function solution(number, limit, power) {
    var answer = 1;
    let cnt = 0;
    
    for(i=2; i<=number; i++){
        cnt = 0;
        for(j=1; j<=Math.sqrt(i); j++){
            if(i%j === 0){
                if(i/j === j){
                    cnt += 1;
                } else{
                    cnt+=2;
                }
 
            }
        }

        if(cnt > limit){
            answer += power;
        }else {
            answer += cnt;
        }
    }
    
    return answer;
}