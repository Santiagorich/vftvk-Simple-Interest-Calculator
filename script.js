var principal = document.getElementById("principal");
var rate = document.getElementById("rate");
var years = document.getElementById("years");
var interest = principal * years * rate /100;
var result = document.getElementById("result");
var rate_val = document.getElementById("rate_val")

//Updates rate value in ui when the input changes
function updateRate() 
{
    var ratevalue = rate.value;
    rate_val.innerText=`${ratevalue}%`;
}

//Computes result
function compute()
{
    if(principal.value <= 0) {
        alert("Enter a positive number")
        principal.focus();
    }
    else{
    var year = new Date().getFullYear()+parseInt(years.value);
    p = principal.value;
    amount = ((p*(rate.value/100))*years.value);
    result.innerText = `
    If you deposit ${p}$,
    at an interest rate of ${rate.value}%.
    You will receive an amount of ${amount}$,
    in the year ${year}.
    `
    }
}
        
rate.addEventListener("change", updateRate); 