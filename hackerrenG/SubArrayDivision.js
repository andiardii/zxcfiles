function birthday(s, d, m) {
    // Write your code here
    let match = []
    if (s.length == 1 && s[0] == d) {
        match.push(1)
    } else {
        s.forEach((item, index) => {
            let val = s.slice(index, index + m).reduce((acc, current) => acc + current, 0)
            if (val == d) {
                match.push(item)
            }
        })
    }
    
    return match.length
}