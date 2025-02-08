function solution(sizes) {
    var answer = 0;
    /*
    let big = [], small = [];
    
    for(i=0; i<sizes.length; i++){
        if(sizes[i][0] > sizes[i][1]){
            big.push(sizes[i][0]);
            small.push(sizes[i][1]);
        } else {
            big.push(sizes[i][1]);
            small.push(sizes[i][0]);
        }
    }

    answer = Math.max(...big) * Math.max(...small);*/

    let big = [],
        small = [];
    
    sizes.forEach(v => {
        if(v[0] < v[1]){
            small.push(v[0]);
            big.push(v[1]);
        }else {
            small.push(v[1]);
            big.push(v[0]);
        }
    })

    answer = Math.max(...big)*Math.max(...small);
    
    return answer;
}