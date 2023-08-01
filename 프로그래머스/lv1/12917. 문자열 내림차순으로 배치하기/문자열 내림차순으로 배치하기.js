function solution(s) {
    var answer = '';
    let val = 0;
    
    s = s + '';
    s = s.split('');
    
    for(i=0; i<s.length; i++){
        val = s[i];
        for(j=i+1; j<s.length; j++){
            if(val < s[j]){
                val = s[j];
                s[j] = s[i];
                s[i] = val;
            }
        }
    }
    
    s = s.join('');
    answer = s;
    
    return answer;
}