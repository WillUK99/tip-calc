const amountInput = document.getElementById('bill')
const percentButtons = [...document.querySelectorAll(".tipBtn")]
const customPercentInput = document.getElementById("customPercent")
const noOfPeopleInput = document.getElementById("people")

let tipAmount = document.getElementById("tipAmount")
let totAmount = document.getElementById("totAmount")

let bill, totalBill, tipPercent, people, tipPerPerson, totPerPerson

// todo
// get the totalBill bill amount
// times bill amount by tip percent to get totalBill cost 
// minus the new totalBill by initial bill to get the totalBill tip price
// divide the totalBill tip between no.of people to get tips per person 
// divid the totalBill (excl tip) by no.of people
// insert totalBills to DOM 

// Implement guarding for inputs 

// reset button 

function splitter() {
    amountInput.addEventListener("change", (e) => {
        bill = e.target.value
    })
    
    percentButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            tipPercent = e.target.value
        })
    })

    customPercentInput.addEventListener("change", (e) => {
        tipPercent = e.target.value
    })

    noOfPeopleInput.addEventListener("change", (e) => {
        people = e.target.value
        console.log(bill / people)
    })

}

splitter()


