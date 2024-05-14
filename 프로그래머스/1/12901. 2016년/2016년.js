function solution(a, b) {
    var answer = '';
    const week = ["THU","FRI","SAT","SUN","MON","TUE","WED"];
    const month_end = [31,29,31,30,31,30,31,31,30,31,30,31];
    
    let day = 0;
    
    for(i=0; i<a-1; i++){
        day += month_end[i];
    }

    day += b;
    day = day%7;

    return answer = week[day];
}