function solution(ineq, eq, n, m) {

    const operation = {
        '>=' : (n,m) => n >= m,
        '<=' : (n,m) => n <= m,
        '>!' : (n,m) => n > m,
        '<!' : (n,m) => n < m,
    }
    return operation[ineq + eq](n,m) ? 1 : 0;
}