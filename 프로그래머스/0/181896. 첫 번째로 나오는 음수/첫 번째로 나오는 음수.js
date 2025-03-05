function solution(num_list) {
    let answer = 0;
    let isStop = false
    num_list.forEach((v,i) => {
        if(isStop) return
        if(v< 0) {
            answer = i
            isStop = true
         }
        
       
    })
    
    return isStop ? answer : -1;
}