function solution(n, k) {
    var answer = 0;
    let service_num = 0;
    
    if(n/10 > 0){
        service_num = parseInt(n/10);
    }

    answer = (n * 12000) + ((k - service_num) * 2000);
    
    return answer;
}