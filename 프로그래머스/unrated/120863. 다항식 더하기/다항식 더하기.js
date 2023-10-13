function solution(polynomial) {
    var answer = '';
    let arr = [];
    let num_x = 0;
    let num = 0;
    arr = polynomial.split('+');
    for(i=0; i<arr.length; i++){
        if(arr[i].includes('x')){
            if(isNaN(parseInt(arr[i]))){
                num_x += 1;
            } else {
                num_x += parseInt(arr[i]);
            }
        } else {
            num += parseInt(arr[i]);
        }
    }
    
    if(num_x === 0) {
        answer = num.toString();
    } else if(num_x === 1 && num === 0) {
        answer = 'x';
    } else if(num_x === 1){
        answer = 'x' + ' + ' + num;
    } else if(num === 0) {
        answer = num_x + 'x';
    } else {
        answer = num_x + 'x' + ' + ' + num;
    }
    
    return answer;
}