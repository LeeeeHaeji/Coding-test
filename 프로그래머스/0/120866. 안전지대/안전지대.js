function solution(board) {
    var answer = 0;
    let booms = [];
    
    let N = board.length;
    
    for(i=0; i<N; i++){
        for(j=0; j<N; j++){
            if(board[i][j] === 1){
                booms.push([i,j]); // 지뢰 위치
            }
        }
    }

    booms.forEach(([x,y]) => {
        // console.log([x,y]);
        // 위험구역 찾기
        let neighbors = [
                [x-1, y-1],[x-1, y],[x-1, y+1],
                [x, y-1],[x,y],[x, y+1],
                [x+1, y-1],[x+1, y],[x+1, y+1]
        ];
 
        // 위험구역 표시
        neighbors.forEach(([x, y]) => {
            if(x>=0 && x<N && y>=0 && y<N){
                board[x][y]++;
            }
        })
    })
    
    answer = [].concat(...board).filter((value) => value === 0).length;

    return answer;
}