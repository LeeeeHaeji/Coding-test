function solution(numbers) {
    var answer = 0;
    let cal_num = [];
    let cal_max_num = [];
    
    for(i=0; i<numbers.length; i++){
        for(j= i+1; j<numbers.length; j++){
            cal_num.push(numbers[i]*numbers[j]);
        }
    }
    
    answer = Math.max(...cal_num)
    
    return answer;
}