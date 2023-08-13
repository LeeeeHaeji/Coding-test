function solution(my_string, letter) {
    var answer = '';
    let remove_index = [];
    let pos = 0;
    
    for(i=0; i<my_string.length; i++){
        if(my_string.indexOf(letter, pos)>=0){
            remove_index.push(my_string.indexOf(letter, pos));
            pos = my_string.indexOf(letter, pos) + 1;
        }
    }
    
    my_string = my_string.split('')
    
    for(i=0; i<remove_index.length; i++){
        my_string.splice(remove_index[i] - i, 1)
    }
    
    answer = my_string.join('');
    
    return answer;
}