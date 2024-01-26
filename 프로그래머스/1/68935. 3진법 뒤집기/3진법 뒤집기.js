function solution(n) {
    var answer = 0;
    let n_3 = [...n.toString(3)];
    let conv_n3 = [];
    
    for(j=n_3.length-1; j>=0; j--) {
        conv_n3.push(n_3[j]);
    }
    
    answer = parseInt(conv_n3.join(''), 3);
    
    return answer;
}