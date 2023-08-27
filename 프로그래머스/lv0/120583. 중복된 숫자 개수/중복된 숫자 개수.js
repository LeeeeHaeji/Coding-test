function solution(array, n) {
    var answer = 0;
    let cnt = 0;
    
    for(i=0; i<array.length; i++){
        if(array[i] == n){
            cnt++;
        }
    }
    
    answer = cnt;
    
    return answer;
}