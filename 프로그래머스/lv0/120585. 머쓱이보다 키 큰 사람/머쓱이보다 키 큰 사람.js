function solution(array, height) {
    var answer = 0;
    
    let result = array.filter(v => v > height).length;
    
    answer = result;
    return answer;
}