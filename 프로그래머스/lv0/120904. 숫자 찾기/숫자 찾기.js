function solution(num, k) {
    var answer = 0;
    num = num.toString();
    num = num.split('')
    
    let pos = num.indexOf(`${k}`);
    
    pos !== -1 ? answer = pos+1 : answer = pos
    
    return answer;
}