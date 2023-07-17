function solution(n)
{
    var answer = 0;
    n = n + '';
    n = n.split('');
    console.log(n); // 	[ '1', '2', '3' ], string
    
    
    for(i=0; i<n.length; i++){
        n[i] = Number(n[i]);
    }
    console.log(n); // [ 1, 2, 3 ], number
    
    for(i=0; i<n.length; i++){
        answer += n[i];
    }

    return answer;
}