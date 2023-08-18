function solution(balls, share) {
    var answer = 0;
    let numerator = 1;
    let denominator = 1;
    
    for(i=0; i<share; i++){
        numerator = numerator * (balls - i);
        denominator = denominator * (i+1);
    }
    
    answer = Math.round(numerator / denominator);
    
    return answer;
}