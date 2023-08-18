function solution(rsp) {
    var answer = '';
    let arr = [];
    
    rsp = rsp.split('');
    
    for(i=0; i<rsp.length; i++){
        if(rsp[i] === "2"){
            arr[i] = "0";
        } else if(rsp[i] == "0") {
            arr[i] = "5";
        } else {
            arr[i] = "2";
        }
    }
    
    answer = arr.join('');
    
    return answer;
}