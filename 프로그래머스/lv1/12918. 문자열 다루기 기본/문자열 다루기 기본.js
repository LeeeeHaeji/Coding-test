function solution(s) {
    var answer = true;
    
    s = s.split('');
    
    if(!((s.length === 4) || (s.length === 6))){
        answer = false;
    } else {
        for(i=0; i<s.length; i++){
            // 숫자로만 구성되어있는지
            if(Number.isNaN(parseInt(s[i])) === true){
                answer = false;
            }
        }
    }
    
   
    return answer;
}