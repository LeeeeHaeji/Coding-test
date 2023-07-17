function solution(a, b) {
    var answer = 0;
    var sum = 0;
    
    if(a<=b){
        for(i=a; i<=b; i++){
            sum += i;
        }    
    }
    else {
        for(i=b; i<=a; i++){
            sum += i;
        } 
    }
    
    answer = sum;
    
    return answer;
}