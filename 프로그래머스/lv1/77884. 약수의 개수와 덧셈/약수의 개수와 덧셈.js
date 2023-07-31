function solution(left, right) {
    var answer = 0;
    var result = '';
   
    for(i=left; i<=right; i++){
        var list = [];
        for(j=1; j<=i; j++){
            if(i%j == 0){
                list.push(j);
            }
        }
        
        if(list.length % 2 == 0){
            result = 'even';
        } else {
            result = 'odd';
        }
        
        if(result == 'even'){
            answer += i;
        } else {
            answer -= i;
        }
    }
    
    
    
    return answer;
}