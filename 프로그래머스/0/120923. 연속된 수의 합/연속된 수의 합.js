function solution(num, total) {
    var answer = [];
    let N = total;
    
    if(N === 0){
        for(i=-parseInt(num/2); i<=parseInt(num/2); i++){
            answer.push(i);
        }
    }
    
    while(N>0){
        let sum_num = [];
        let sum = 0;

        for(i=0; i<num; i++){
            sum_num.push(N-i);
            sum += (N-i);
        }
        
        if(sum === total){
            answer = sum_num.sort((a,b) => a-b);
        }

        N--;
    }

    return answer;
}