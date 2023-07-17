function solution(n) {
    var answer = 0;
    var num = 0;
    
    for(i=1; i<=n; i++){
        if(i*i == n){
            num = (i+1) * (i+1);
            break;
        }
    }
    
    if(!!num == true){
        answer = num;
    }
    else {
        answer = -1;
    }
   
     return answer;
}