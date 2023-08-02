function solution(phone_number) {
    var answer = '';
    let pwd_num = '';
    let slice_num = 0;
    
    slice_num = phone_number.slice(0, -4);
    
    for(i=0; i<slice_num.length; i++){
        pwd_num += '*';
    }
    
    answer = phone_number.replace(slice_num, pwd_num);
    return answer;
}