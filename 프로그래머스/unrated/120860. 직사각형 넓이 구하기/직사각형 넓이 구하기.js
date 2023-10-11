function solution(dots) {
    var answer = 0;
    let x = [];
    let y = [];
    for(i=0; i<dots.length; i++){
        x.push(dots[i][0]);
        y.push(dots[i][1]);
    }
    let height = Math.max(...x) - Math.min(...x)
    let width = Math.max(...y) - Math.min(...y)
    
    answer = height * width;
    
    return answer;
}