function solution(num_list) {
    var answer = [];
    for(i=0; i<num_list.length; i++){
        answer[num_list.length - i - 1] = num_list[i];
    }
    return answer;
}