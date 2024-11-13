function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let appleFalls = [];
    apples.forEach((apple, index) => {
        let x = a + apple
        if (x >= s && x <= t) {
            appleFalls.push(apple)
        }
    })
    
    console.log(appleFalls.length)
    
    let orangeFalls = [];
    oranges.forEach((orange, index) => {
        let y = b + orange
        if (y >= s && y <= t) {
            orangeFalls.push(orange)
        }
    })
    
    console.log(orangeFalls.length)
}