function solution(s1, s2) {
    var answer = 0;
    let cnt = 0;
    
    for(i=0; i<s1.length; i++){
        for(j=0; j<s2.length; j++){
            if(s1[i] === s2[j]){
                cnt++;
            }
        }
    }
    
    answer = cnt;
    
    return answer;
}