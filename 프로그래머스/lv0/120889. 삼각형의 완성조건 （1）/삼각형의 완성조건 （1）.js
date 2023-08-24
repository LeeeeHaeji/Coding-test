function solution(sides) {
    var answer = 0;
    let max = Math.max(...sides);
    let index_max = sides.indexOf(max)
    
    sides.splice(index_max,1)
    
    let sum = 0;
    sides.map((v,i) => sum += v);
    
    if(sum > max) {
        answer = 1;
    } else {
        answer = 2;
    }
    
    return answer;
}