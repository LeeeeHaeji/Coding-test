function solution(i, j, k) {
    var answer = 0;
    let cnt = 0;
    let num = 0;
    
    k = k.toString(); 
    
    for(x=i; x<=j; x++){
        num = x.toString();
        num = num.split('')

        for(r=0; r<num.length; r++){
            if(num[r] === k){ 
                cnt++;
            }
        }
    }
    
    answer = cnt
    
    return answer;
}