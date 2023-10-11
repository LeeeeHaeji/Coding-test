function solution(bin1, bin2) {
    var answer = '';
    bin1 = parseInt(bin1, 2);
    bin2 = parseInt(bin2, 2);
    let sum = bin1+bin2;
    
    answer = sum.toString(2)
    
    return answer;
}