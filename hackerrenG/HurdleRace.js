function hurdleRace(k, height) {
    // Write your code here
    let max = k
    height.forEach((h) => {
        if (h > k && h > max) {
            max = h
        }
    })
    
    return max - k
}