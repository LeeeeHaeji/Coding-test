function solution(s) {
    var answer = 0;
    let sum = 0;
    
    s = s.split(' ')
    for(i=0; i<s.length; i++){
        if(s[i] === 'Z'){
            sum -= parseInt(s[i-1]);
        } else {
            sum += parseInt(s[i]);
        }
    }
    
    answer = sum;
    return answer;
}