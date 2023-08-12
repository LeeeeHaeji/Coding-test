function solution(my_string) {
    var answer = '';
    let rev_arr = [];
    
    my_string = my_string.split('');
    
    for(i=0; i<my_string.length; i++){
        rev_arr[my_string.length - i - 1] = my_string[i];
    }
    
    answer = rev_arr.join('')
    
    return answer;
}