function solution(my_string) {
    var answer = 0;
    
    my_string = my_string.split(' ')
    
    for(i=0; i<my_string.length; i++){
        if(!isNaN(parseInt(my_string[i]))){
            my_string[i] = parseInt(my_string[i])
        }
    }
    
    let cal = my_string[0];
    for(i=0; i<my_string.length; i++){
        if(my_string[i] === "+"){
            console.log("더하기");
            cal += my_string[i+1];
        } else if(my_string[i] === "-"){
            console.log("빼기")
            cal -= my_string[i+1];
        }
    }
    
    answer = cal;
    return answer;
}