function solution(n) {
    var answer = 0;
    var data = 0;
    var max = 0;
    
    n = n + '';
    n = n.split('');
    console.log(n); // 	[ '1', '1', '8', '3', '7', '2' ]
    
    for(i=0; i<n.length; i++){
        n[i] = Number(n[i]);
    }
    console.log(n); // [ 1, 1, 8, 3, 7, 2 ]
    
    for(i=0; i<n.length; i++){
        data = n[i];
        for(j=i+1; j<n.length; j++){
            if(data<n[j]){
                data = n[j];
                n[j] = n[i];
                n[i] = data;
            }
        }
    }

    n = n.join('');
    n = Number(n);
    
    answer = n;
    return answer;
}