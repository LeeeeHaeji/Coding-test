function solution(my_string, num1, num2) {
    var answer = '';
    let index_1 = 0;
    let index_2 = 0;
    
    index_1 = my_string.slice(num1, num1+1);
    index_2 = my_string.slice(num2, num2+1);
    
    my_string = my_string.split('')
    my_string.splice(num1, 1, index_2)
    my_string.splice(num2, 1, index_1)
    
    answer = my_string.join('')
    
    return answer;
}