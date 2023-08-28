function solution(n) {
    var answer = 0;
    let sum = 0;
    
    n = n.toString();
    n = n.split('');
    
    n.map((v) => sum+= parseInt(v));
    
    answer = sum;
    
    return answer;
}