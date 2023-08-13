function solution(my_string, n) {
    var answer = '';
    let arr = [];
    
    my_string = my_string.split('');

    for(i=0; i<my_string.length; i++){
        arr.push(my_string[i].repeat(n));
    }
    
    answer = arr.join('');
    
    return answer;
}