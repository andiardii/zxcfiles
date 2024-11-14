function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let combine = []
    keyboards.forEach((k) => {
        for (let i=0; i< drives.length; i++) {
            let val = k + drives[i]
            combine.push(val)
        }
    })
    
    let max = []
    combine.forEach((c) => {
        if (c <= b) {
            max.push(c)
        }
    })
    
    return max.length > 0 ? Math.max(...max) : -1
}