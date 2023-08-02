function solution(n, m) {
    var answer = [];
    let share_num = 1;
    let remain_num = 0;
    let repeat = 0;
    
    if(n < m) {
        repeat = n;
    } else {
        repeat = m;
    }
    
    for(i=1; i<=repeat; i++){
        if(n%[i] === 0 && m%[i] === 0){
            share_num = i
        }
    }
    
    remain_num = (n/share_num) * (m/share_num);
    
    answer = [share_num, share_num * remain_num]
    
    return answer;
}