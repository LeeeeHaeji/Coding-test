function solution(my_string) {
    var answer = '';
    
    my_string = my_string.split('');
    
    for(i=0; i<my_string.length; i++){
        // 대문자가 맞다면
        if(my_string[i].toUpperCase() === my_string[i]){
            my_string[i] = my_string[i].toLowerCase()
        } else {
            //대문자가 아니라면
            my_string[i] = my_string[i].toUpperCase()
        }
    }

    answer = my_string.join('');
    
    return answer;
}