function solution(lines) {
    var answer = 0;
    let depth = Array(200).fill(0);

    for(i=0; i<3; i++){
        for(j = lines[i][0]; j<lines[i][1]; j++){
            depth[j + 100] += 1;
        }
    }
    
    return answer = depth.filter((v) => v>=2).length;
}