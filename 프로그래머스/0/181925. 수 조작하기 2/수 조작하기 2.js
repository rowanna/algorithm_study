function solution(numLog) {
    const convertObj = {
        '1': 'w',
        '-1': 's',
        '10': 'd',
        '-10': 'a',
    }
    
    return numLog.slice(1).map((el, idx,arr) => convertObj[el - numLog[idx]]).join('');
}