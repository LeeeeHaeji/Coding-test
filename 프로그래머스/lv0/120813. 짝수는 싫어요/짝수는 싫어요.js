function solution(n) {
    var answer = [];
    let arr = [];
    
    for(i=1; i<=n; i++){
        if(i%2 === 1){
            arr.push(i);
        }
    }
    
    answer = arr;
    return answer;
}