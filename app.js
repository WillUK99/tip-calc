const amountInput = document.getElementById('bill')
const percentButtons = [...document.querySelectorAll(".tipBtn")]
const customPercentInput = document.getElementById("customPercent")
const noOfPeopleInput = document.getElementById("people")

let tipAmount = document.getElementById("tipAmount").innerText
let totAmount = document.getElementById("totAmount").innerText

let totalBill = 50
let tip = 7
let people = 3
let tipPerPerson = 0
let totPerPerson = 0

// todo
// get the totalBill bill amount
// times bill amount by tip percent to get totalBill cost 
// minus the new totalBill by initial bill to get the totalBill tip price
// divide the totalBill tip between no.of people to get tips per person 
// divid the totalBill (excl tip) by no.of people
// insert totalBills to DOM 

// reset button 

// gets percentage of a number
function percentage(num, per) {
    return (num / 100) * per
}

// get total of percentage plus the total bill
function getTotal(percentage) {
    return totalBill + percentage
}

// divides total bill with tip pbetween all people 
function divideTotal(getTotal) {

}


console.log(getTotal(percentage(totalBill, tip)))



// getting amounts from amount input
amountInput.addEventListener("change", e => {
    e.preventDefault()
    if (e.target.value <= 0) return
    totalBill = e.target.value
})


// get tip amount to pass to addTip function
percentButtons.forEach(element => {
    element.addEventListener("click", e => {
        e.preventDefault()
        tip = element.getAttribute("value")
    })
})

// custom percent 
customPercentInput.addEventListener("change", e => {
    e.preventDefault()
    if (e.target.value <= 0) return
    tip = e.target.value
})

//gets total people value
noOfPeopleInput.addEventListener("change", e => {
    e.preventDefault()
    if(noOfPeopleInput.target.value <= 0) return
    people = noOfPeopleInput.target.value
})


