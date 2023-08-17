function solution(hp) {
    var answer = 0;
    
    let 장군개미 = parseInt(hp/5);
    hp = parseInt(hp%5);
    
    let 병정개미 = parseInt(hp/3);
    hp = parseInt(hp%3);
    
    console.log(`장군개미 : ${장군개미}`)
    console.log(`병정개미 : ${병정개미}`)
    console.log(`일개미 : ${hp}`)
    
    answer = 장군개미 + 병정개미 + hp
    
    return answer;
}