function solution(my_string) {
//     var answer = 0;
//     let str_arr = my_string.split('');
//     let sum = 0;
    
//     for(i=0; i<str_arr.length; i++){
//         if(!isNaN(parseInt(str_arr[i]))){
//             sum += parseInt(str_arr[i]);
//         }
//     }
    
    
    
//     answer = sum;
    let num = ['1','2','3','4','5','6','7','8','9'];
    
    return Array
        .from(my_string)
        .filter(v => num.includes(v))
        .reduce((a,c) => a+parseInt(c), 0)
}