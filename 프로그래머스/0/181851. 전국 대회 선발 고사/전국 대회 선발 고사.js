function solution(rank, attendance) {
    var answer = 0;
    let attend_idx = [];
    let a = 0, b = 0, c = 0;
    
    attendance.map((v,i) => {
        if(v === true){
            attend_idx.push(rank[i]);
        }
    })
    
    attend_idx.sort((a,b) => (a-b))

    a = rank.indexOf(parseInt(attend_idx[0]));
    b = rank.indexOf(parseInt(attend_idx[1]));
    c = rank.indexOf(parseInt(attend_idx[2]));

    return answer = 10000 * a + 100 * b + c;
}