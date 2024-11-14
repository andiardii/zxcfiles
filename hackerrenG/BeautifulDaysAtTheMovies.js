function beautifulDays(i, j, k) {
    // Write your code here
    let result = []
    for(let x=i; x<j+1; x++) {
        let revNum = parseInt(x.toString().split('').reverse().join(''));
        let value = Math.abs(x - revNum) / k
        if (Number.isInteger(value)) {
            result.push(value)
        }
    }
    
    return result.length
}