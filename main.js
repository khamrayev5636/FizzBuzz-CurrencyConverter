// 1 - Mashq ========================================================

var elForm = document.querySelector(".form");
var elInput = elForm.querySelector(".form__input");
var elAlert = document.querySelector(".alert-js");



elForm.addEventListener("submit" , function(evt){
    evt.preventDefault()
    var elNumber = Number(elInput.value);
    
    if(elNumber % 3 == 0 && elNumber % 5 == 0){
        elAlert.textContent = "FizzBuzz"
    }else if(elNumber % 3 == 0){
        elAlert.textContent = "Fizz"
    }else if(elNumber % 5 == 0){
        elAlert.textContent = "Buzz"
    }else{
        elAlert.textContent = elNumber + " Kiritilgan son 3 ga ham 5 ga ham bo'linmaydi"
    }
    
    elInput.value = ""
})



// ===================== 2-Mashq =================

var moneyForm = document.querySelector(".form-money");
var moneyInput = moneyForm.querySelector(".input-js");
var elSelect = moneyForm.querySelector(".select-js")
var elText = document.querySelector(".text-js");

moneyForm.addEventListener("submit" , function(evt){
    evt.preventDefault()
    
    var inputValue = Number(moneyInput.value);
    
    elText.textContent = inputValue * elSelect.value
})





// 2-Mashq ============================================================================


