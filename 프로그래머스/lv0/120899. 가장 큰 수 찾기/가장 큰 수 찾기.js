function solution(array) {
    var answer = [];
    let max = 0;
    
    max = Math.max(...array);
    let index_num = array.indexOf(max);
    
    answer = [max, index_num];
    
    return answer;
}