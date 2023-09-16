function solution(my_string) {
    var answer = 0;
    let sum = 0;
    let num_arr = [];
    
    for(i=0; i<my_string.length; i++){
        if(isNaN(parseInt(my_string[i]))){
            my_string = my_string.replaceAll(my_string[i], " ")
        }
    }
    my_string = my_string.split(' ')
    
    for(i=0; i<my_string.length; i++){
        if(!isNaN(parseInt(my_string[i]))){
            num_arr.push(parseInt(my_string[i]));
        }
    }
    
    num_arr.map((v,i) => {
        sum += parseInt(v);
    })
    
    answer = sum;
    return answer;
}