//ska det vara minus och plustecken framför? 

//Function for monthly budget

//Arrays used to store amount input from users
var array = []
var arrayIncome = []
var arraySpendings = []

function createLi(event) {
    event.preventDefault(); 
    var option = document.querySelector("#calculate")
    var description = document.querySelector("#description").value
    var amount = document.querySelector("#amount").value
//+
//created if statement if the user chooses +
if(option.value==="+") {
    //creates li element and pushes it into ul
    var incomeUl = document.querySelector(".income--ul")
    var li = document.createElement("li")
    li.innerHTML = description + " : " + amount
    incomeUl.appendChild(li)
    //push + numbers into arrays
    array.push(Number(amount))
    arrayIncome.push(Number(amount))
}   
//-
//added else if the user chooses - option
else {
    //creates li element and pushes it into ul
    var spendingUl = document.querySelector(".spending--ul")
    var li = document.createElement("li")
    li.innerHTML = description + " : " + -amount
    spendingUl.appendChild(li)
    //push - numbers into arrays 
    array.push(Number(-amount))
    arraySpendings.push(Number(-amount))
}
//for loop to show total spendings based on input
var test = 0;
for(var i = 0; i<arraySpendings.length; i++) {
    test += arraySpendings[i];
}
//for loop to show total income based on input
var test2 = 0; 
for(var i = 0; i<arrayIncome.length; i++) {
    test2 += arrayIncome[i];
}
//for loop to show total profit based on income-spendings
var total = 0; 
for(var i = 0; i<array.length; i++) {
    total += array[i];
}
//stores total profit in element
var vinst  = document.querySelector(".savings--h4")
vinst.innerHTML = total
//stores total spendings in element
var totalSpendings = document.querySelector(".spendings--p")
totalSpendings.innerHTML = test
//stores total income in element
var totalIncome = document.querySelector(".income--p")
totalIncome.innerHTML = test2    
}

//added eventlistner to button so it creates the function when
//button is clicked
var btn = document.querySelector("#button")
btn.addEventListener("click", createLi)