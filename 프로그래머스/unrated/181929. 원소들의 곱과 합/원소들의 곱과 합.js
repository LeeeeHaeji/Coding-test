function solution(num_list) {
    var answer = 0;
    let mult = 1;
    let sum_square = 0;
    
    num_list.map((v,i) => {
        mult = mult * v;
        sum_square += v
    })
    sum_square = sum_square**2
    
    mult < sum_square ? answer = 1 : answer = 0;
    
    return answer;
}