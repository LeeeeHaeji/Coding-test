function solution(wallpaper) {
    var answer = [];
    let lux = 0, luy = 0, rdx = 0, rdy = 0;
    let x = [], y = [];
    
    for(i=0; i<wallpaper.length; i++){
        for(j=0; j<wallpaper[i].length; j++){
            if(wallpaper[i][j] === '#'){
                x.push(i);
                y.push(j);
            }
        }
    }
    
    answer.push(lux = Math.min(...x));
    answer.push(luy = Math.min(...y));
    answer.push(rdx = Math.max(...x) + 1);
    answer.push(rdy = Math.max(...y) + 1);
    
    return answer;
}