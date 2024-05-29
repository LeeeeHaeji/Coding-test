function solution(brown, yellow) {
    var answer = [];
    /*
    console.log(brown/2);

    let y_height = i; //i는 1씩 증가 초기값: 1
    let y_width = yellow/i;
    if(y_width*y_height === yellow){
        //answer.push(y_width+2)
        //answer.push(y_height+2)
    }
    */
    let cnt = 1;

    let b_width = yellow/cnt+2;
    let b_height = cnt;
    
    while((b_width*2+b_height*2) !== brown){
        cnt++;
        b_width = yellow/cnt+2;
        b_height = cnt;
    }

    let y_height = cnt; //i는 1씩 증가 초기값: 1
    let y_width = yellow/cnt;

    answer.push(y_width+2);
    answer.push(y_height+2);
    
    return answer;
}