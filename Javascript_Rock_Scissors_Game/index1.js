let play=document.querySelector(".play1");
let ruleBtn=document.querySelector(".btn-rule");
let rulemodel=document.querySelector(".rule-modal");



play.addEventListener("click",()=>{
    window.location.href="index.html";

})

ruleBtn.addEventListener("click",()=>{
    rulemodel.style.display="flex";
 })
 
 let close=document.querySelector(".close");
 close.addEventListener("click",()=>{
     rulemodel.style.display="none";
 
 })
 
