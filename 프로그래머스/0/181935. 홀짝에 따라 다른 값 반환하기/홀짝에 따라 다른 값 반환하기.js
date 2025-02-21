function solution(n) {
    const answer = 0;
    const answerArr = []
    
    
    for (let i = 1; i <= n; i++) {
       if(n % 2 === 1&& i % 2 ===1) {
            answerArr.push(i)

        }else if(n % 2 !== 1&& i % 2 !==1){
            answerArr.push(i*i)

        } 
    }
    
    return answerArr.reduce((acc, cur) => acc+ cur);
}