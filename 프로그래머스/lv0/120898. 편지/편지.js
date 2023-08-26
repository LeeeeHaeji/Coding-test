function solution(message) {
    var answer = 0;
    let sum = 0;
    
    message = message.split('');
    message.map((v,i) => sum+=2);
    
    answer = sum;
    
    return answer;
}