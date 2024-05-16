function solution(k, m, score) {
    var answer = 0;
    let apple_box = [];
    score.sort((a,b) => b-a)

    for(i=0; i<score.length; i+=m){
        let box = []
        for(j=0; j<m; j++){
            box.push(score[i+j])
        }
        apple_box.push(box)
    }

    apple_box = apple_box.filter(v => !v.includes(undefined))

    apple_box.map(v => {
        let min = Math.min(...v);
        answer += min*m;
    })
    
    return answer;
}