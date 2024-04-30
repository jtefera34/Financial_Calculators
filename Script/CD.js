"use strict";

//input
 const deposit = document.getElementById("depositfield");
 const apy =  document.getElementById("apyfield");
 const cd = document.getElementById("cdfield");

 //button
 const yearly = document.getElementById("yearlyBtn");
 const monthly = document.getElementById("monthlyBtn");
 
 // output
const interest = document.getElementById("Tinterest");
const total = document.getElementById("Tamount");
const Tmonthly = document.getElementById("Tmonthly")

window.onload = init;

function init(){
  yearly.onclick = yearlyclick;
  monthly.onclick = monthlyclick;
}

function yearlyclick(){
  let d = Number(deposit.value);
  let r = Number(apy.value);
  let n = Number(cd.value);
  r = r/100
 total.value = d *Math.pow((1+r/12),n*12);
interest.value = total.value - d;
}
function monthlyclick(){
  let d = Number(deposit.value);
  let r = Number(apy.value);
  let n = Number(cd.value);
  r = r/100
 Tmonthly.value = interest.value/(n*12);
  
}

