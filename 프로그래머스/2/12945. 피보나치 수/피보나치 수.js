// function fibonacci(n){
//     if(n >= 2){
//         let result = ((fibonacci(n-1)%1234567) + (fibonacci(n-2)%1234567))%1234567;
//         return result;
//     } else if(n === 1){
//         return 1;
//     } else if(n === 0){
//         return 0;
//     }
  
// }

function solution(n) {
    let answer = 0;
    let fibo = [0,1];
    for(i=2; i<=n; i++){
        fibo.push((fibo[i-1]%1234567)+(fibo[i-2]%1234567));
    }
    answer = fibo[n]%1234567
    return answer;
}