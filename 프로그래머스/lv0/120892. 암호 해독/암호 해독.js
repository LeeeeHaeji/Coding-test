function solution(cipher, code) {
    var answer = '';
    let str_arr = cipher.split('');

    let fliter_arr = [];
    
    for(i=1; i<=str_arr.length; i++){
        if(i%code === 0){
            fliter_arr.push(str_arr[i-1])
        }
    }

    answer = fliter_arr.join('');
    
    return answer;
}