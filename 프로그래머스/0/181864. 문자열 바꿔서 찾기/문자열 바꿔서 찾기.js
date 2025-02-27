function solution(myString, pat) {
    const arr = [...myString].map((el) => el === 'A' ? 'B' : 'A').join('')

    return arr.includes(pat) ? 1 : 0;
}