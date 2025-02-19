function solution(a, b) {
    var answer = 0;
    const newA = String(a)
    const newB = String(b)
    return newA + newB >= newB + newA ? Number(newA+newB) : Number(newB+newA) ;
}