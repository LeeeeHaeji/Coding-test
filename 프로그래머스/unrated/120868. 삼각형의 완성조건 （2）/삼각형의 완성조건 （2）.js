function solution(sides) {
    var answer = 0;
    let arr = [];
    
    let max = Math.max(...sides);
    let min = Math.min(...sides)
    let num = max - min + 1;
    
    for(i=num; i<=max; i++){
        arr.push(i);
    }
    
    for(i= max + 1; i<max + min; i++){
        arr.push(i);
    }
    
    answer = arr.length;
    return answer;
}