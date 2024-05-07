function solution(d, budget) {
    var answer = 0;
    let cnt = 0;
    
    d.sort((a,b) => a-b)
    let sum = d[0];
    
    while(sum <= budget){
        cnt++;
        sum += d[cnt];
    }

    answer = cnt;

    return answer;
}