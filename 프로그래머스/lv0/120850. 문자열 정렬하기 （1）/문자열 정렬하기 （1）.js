function solution(my_string) {
    var answer = [];
    let num_arr = [];
    
    my_string = my_string.split('');
    
    for(i=0; i<my_string.length; i++){
        if(!isNaN(parseInt(my_string[i]))){
            num_arr.push(parseInt(my_string[i]))
        }
    }
    
    answer = num_arr.sort((a,b) => a-b)
    
    console.log(num_arr)
    return answer;
}