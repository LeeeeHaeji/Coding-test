function solution(strlist) {
    var answer = [];
    let cnt_arr = [];
    
    for(i=0; i<strlist.length; i++){
        cnt_arr[i] = strlist[i].length;
    }
    
    answer = cnt_arr
    
    return answer;
}