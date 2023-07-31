function solution(s) {
    var answer = '';
    let num = s.length;
    
    for(i=0; i<num; i++){
        if(num%2 == 0){
            answer = s.substr(num/2 - 1, 2);
        }
        else {
            answer = s.substr((num+1)/2 -1, 1);
        }
    }
    
    return answer;
}