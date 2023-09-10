function solution(my_string) {
    var answer = '';
    let num = 0;
    let cnt = 0;
    my_string = my_string.split('');
    
    while(cnt < 2){
        for(i=0; i<my_string.length; i++){
            for(j=i+1; j<my_string.length; j++){
                if(my_string[i] === my_string[j]){
                    my_string.splice(j,1);
                }
            }
        }
        cnt++
    }
    
    answer = my_string.join('');
    
    return answer;
}