function solution(age) {
    var answer = '';
    let str = 'abcdefghij'
    
    age = age.toString()
    age = age.split('')
    
    for(i=0; i<age.length; i++){
        let num = parseInt(age[i]);
        age[i] = str[num];
    }
    answer = age.join('');
    
    return answer;
}