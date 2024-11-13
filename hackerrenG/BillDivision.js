function bonAppetit(bill, k, b) {
    // Write your code here
    let val = 0
    bill.splice(k, 1);
    bill.forEach((bi) => {
        val += bi
    })
    
    let bActual = val / 2
    let bCharged = bActual - b
    
    if (bCharged == 0) {
        console.log("Bon Appetit")
    } else {
        console.log(Math.abs(bCharged))
    }
}