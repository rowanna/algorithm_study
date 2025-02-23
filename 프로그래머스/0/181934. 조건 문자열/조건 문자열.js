function solution(ineq, eq, n, m) {
    let answer =  ineq === '<' ? n < m : n > m;
    if(eq === '=' && !answer) {
        answer = n === m
    }
    return answer ? 1 : 0;
}