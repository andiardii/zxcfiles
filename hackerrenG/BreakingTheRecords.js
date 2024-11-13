function breakingRecords(scores) {
    // Write your code here
    let min = scores[0]
    let max = scores[0]
    let high = []
    let low = []
    scores.forEach((score, index) => {
        if (score < min || score > max) {
            if (score < min) {
                min = score
            } else {
                max = score
            }
        }
        
        if ((min == score || max == score) && min != max && score != scores[index-1] && score != scores[0]) {
            if (min == score) {
                low.push(score)
            } else {
                high.push(score)
            }
        }
    })
    
    return [high.length, low.length]
}