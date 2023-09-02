function solution(n) {
    var answer = [];
    let arr = [];
    
    for(i=1; i<=n; i++){
        if(n%i === 0){
            arr.push(i);
        }
    }
    
    answer = arr;
    
    return answer;
}