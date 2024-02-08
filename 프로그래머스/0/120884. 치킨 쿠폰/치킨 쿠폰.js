function solution(chicken) {
    var answer = 0;
    let coupon = chicken;
    let cnt = 0;

    while(coupon>=10){
        let serviceChicken = parseInt(coupon/10);
        coupon = serviceChicken + (coupon - serviceChicken*10);
        cnt += serviceChicken;
    }
    
    answer = cnt
    return answer;
}