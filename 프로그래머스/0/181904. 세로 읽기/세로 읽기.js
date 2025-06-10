function solution(my_string, m, c) {
    var answer = '';
    for(let i = 0; i < my_string.length; i++) {
        if((i + 1) % m === 0 ) {
            const startIndex = (((i + 1) / m) - 1) * m
            answer += my_string.slice(startIndex,i+1)[c-1]
            
        }
    }
    return answer;
}