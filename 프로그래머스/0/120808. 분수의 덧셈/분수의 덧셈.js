function solution(denum1, num1, denum2, num2) {
    const denum = (denum1 * num2) + (num1 * denum2);
    const num = num1 * num2;
    let gcd = null;
    
    for(i = 1; i<=denum && i<=num; i++) {
        if((denum % i === 0) && (num % i === 0)) {
            gcd = i;
        }
    }
    
    var answer = gcd !== 1 ? [denum / gcd, num / gcd] : [denum, num]
    
    return answer;
}

