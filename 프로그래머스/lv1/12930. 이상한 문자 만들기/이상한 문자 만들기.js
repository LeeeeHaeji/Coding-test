function solution(s) {
    var answer = '';
    let arr = [];
    
    s = s.split(' ');
    
    for(i=0; i<s.length; i++){
        for(j=0; j<s[i].length; j++){
            if(j%2 == 0){
                //홀수번째일 경우 -> 대문자 변환
                arr.push(s[i][j].toUpperCase());
            } else {
                //짝수번째일 경우 -> 소문자 변환
                arr.push(s[i][j].toLowerCase());
            }
            
        }
        arr.push(' ');
    }
    
    arr.pop();
    arr = arr.join();
    arr = arr.replaceAll(',', '')
    
    answer = arr;
    
    return answer;
}