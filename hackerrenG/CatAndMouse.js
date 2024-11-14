function catAndMouse(x, y, z) {
    let catA = Math.abs(x-z)
    let catB = Math.abs(y-z)
    
    if (catA == catB) {
        return "Mouse C"
    } else if (catA > catB) {
        return "Cat B"
    } else {
        return "Cat A"
    }
}