"use strict";

//inputs
const loan = document.getElementById("loanfield");
const rate = document.getElementById("ratefield");
const term = document.getElementById("termfield");

// output
const monthly = document.getElementById("monthlyfield");
const total = document.getElementById("totalinterest")
//button
const cal = document.getElementById("Calbtn");

window.onload = init;

function init(){
  cal.onclick = calclick
};







function calclick(){
  let l = Number(loan.value);
  let r = Number(rate.value);
  let n = Number(term.value);
  let x;
  
 
   r = r/12/100;
   n = n *12;
   x = Math.pow((r+1),n);
  

  monthly.value = l/ ((x-1)/(r*x));

} 