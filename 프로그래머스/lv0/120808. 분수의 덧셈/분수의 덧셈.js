function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let min = 0;
    let num = 0;
    
    (denom1 > denom2) ? min = denom2 : min = denom1;
    
    for(i=1; i<=min; i++){
        if((denom1%i == 0) && (denom2%i == 0)){
            num = i;
        }
    }
    
    let denom_cal = num * (denom1/num) * (denom2/num);
    let numer_cal = (denom_cal/denom1 * numer1) + (denom_cal/denom2 * numer2);
    
    //약분
    num = 0;
    
    (denom_cal > numer_cal) ? min = numer_cal : min = denom_cal;
    
    for(i=1; i<=min; i++){
        if((denom_cal%i == 0) && (numer_cal%i == 0)){
            num = i;
        }
    }
    
    if(num === 1){
        answer[0] = numer_cal;
        answer[1] = denom_cal;
    } else {
        answer[0] = numer_cal/num;
        answer[1] = denom_cal/num;
    }

    return answer;
}