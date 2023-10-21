function solution(my_string) {
    var answer = '';
    let 모음 = ['a', 'e', 'i', 'o', 'u'];
    
    answer = my_string.split('').filter(v => !모음.includes(v)).join('');
    
    return answer;
}