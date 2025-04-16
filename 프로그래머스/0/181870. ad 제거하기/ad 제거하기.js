function solution(strArr) {
    
    return strArr.map((v,idx) => v.includes('ad') ? '' : v ).filter(v=> v !== '' );
}