function solution(box, n) {
    var answer = 0;
    let cnt_num = [];
    
    for(i=0; i<box.length; i++){
        cnt_num[i] = parseInt(box[i]/n);
    }
    
    answer = cnt_num[0] * cnt_num[1] * cnt_num[2] ;
    
    return answer;
}