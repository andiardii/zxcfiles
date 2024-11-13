function migratoryBirds(arr) {
    // Write your code here
    let value = {}
    arr.forEach((ar) => {
        if (!value[ar]) {
            value[ar] = 0;
        }
        value[ar] += 1;
    });
    
    let maxValue = Object.keys(value).reduce((a, b) => {
        return value[a] > value[b] || (value[a] === value[b] && a < b) ? a : b;
    });
    return maxValue
}