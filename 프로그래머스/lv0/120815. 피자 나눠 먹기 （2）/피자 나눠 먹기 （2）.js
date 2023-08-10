function solution(n) {
    var answer = 0;
    let num = 0;
    
    if(n%6 === 0){
        answer = n/6;
    } else {
        for(i=1; i<=n; i++){
            if((n%i === 0) && (6%i === 0)){
                num = i;
            }
        }
        let total_slice = num*(n/num)*(6/num);
        
        answer = total_slice/6;
    } 
    
    return answer;
}