//för att det inte skulle uppdatera sig? e prevent?
//ska det vara minus och plustecken framför? 

//Function below creates li based on input from user,
//and pushes it into income- or spendinglist depending on,
//if user chooses + or - in input option
function createLi() {
    var option = document.querySelector("#calculate")
    var description = document.querySelector("#description")
    var amount = document.querySelector("#amount")
    var text1 = description.value
    var text2 = amount.value

//+
//created if statement if the user chooses +
if(option.value==="+") {
    var incomeUl = document.querySelector(".income--ul")
    var li = document.createElement("li")
    li.innerHTML = text1 + " : " + text2
    incomeUl.appendChild(li)
}

//-
//added else to make the function push it into - if
//user doesn't choose +
else {
    var spendingUl = document.querySelector(".spending--ul")
    var li = document.createElement("li")
    li.innerHTML = text1 + " : " + text2
    spendingUl.appendChild(li)
}

}

//added eventlistner to button so it creates li when
//button is clicked
var btn = document.querySelector("#button")
btn.addEventListener("click", createLi)