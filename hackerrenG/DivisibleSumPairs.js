function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let match = []
    ar.forEach((arr, index) => {
        for (let i = index+1; i < n; i++) {
            let val = arr + ar[i]
            if (val % k === 0) {
                match.push([arr, ar[i]]);
            }
        }
    })
    
    return match.length
}