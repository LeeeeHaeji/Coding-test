function solution(t, p) {
    var answer = 0;
    
    for(i=0;i<=t.length-p.length; i++){
        let str = t.slice(i,i+p.length);
        if(parseInt(str) <= parseInt(p)){
            answer++;
        }  
    }
    
    return answer;
}