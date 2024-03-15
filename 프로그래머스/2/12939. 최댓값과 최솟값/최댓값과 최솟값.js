function solution(s) {
    var answer = '';
    s = s.split(' ').map((v) => parseInt(v));
    
    answer += Math.min(...s) + ' ';
    answer += Math.max(...s);

    return answer;
}