function solution(n) {
    var answer = 0;
    let composite_num = [];
    
    for(i=1; i<=n; i++){
        let divisor_arr = [];
        for(j=1; j<=n; j++){
            if(i%j === 0){
                divisor_arr.push(j);
            }
        }

        if(divisor_arr.length>2){
            composite_num.push(i);
        }
    }
    
    answer = composite_num.length;
    
    return answer;
}