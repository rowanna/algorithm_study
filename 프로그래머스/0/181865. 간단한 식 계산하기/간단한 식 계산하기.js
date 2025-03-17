
function solution(binomial) {
    const [a, op, b] = binomial.split(' ')
    const convert = {
        '+': (a,b)=>  a + b,
        '-': (a,b)=>  a - b,
        '*': (a,b)=> a * b,
    }
    return convert[op](+a, +b);
}