//Accessing All Elements and classes
let con=document.querySelectorAll(".computer1");
let computer=document.querySelectorAll(".computer");
let user=document.querySelector(".user");
let machine=document.querySelector(".machine");
let random=Math.floor(Math.random()*3);
let triangular=document.querySelector(".triangle");
let winModel=document.querySelector(".win-modal");
let winner=document.querySelector(".winner");
let play=document.querySelector(".play");
let score=JSON.parse(localStorage.getItem("sc"));
let scoreElem=document.getElementById('score');
let ruleBtn=document.querySelector(".btn-rule");
let rulemodel=document.querySelector(".rule-modal");
let nextmodel=document.querySelector(".btn-div1");
let anime=document.getElementById("#useranimation");
let model=document.querySelector(".model");

//computer logic
let score1=JSON.parse(localStorage.getItem("sc1"));
let scoreElem2=document.getElementById('computerscore');
computerscore1=0;
if(score1){
    scoreElem2.innerText=score1;
}
let count1=0;


if(score){
    scoreElem.innerText=score;
}
let count=0;




con.forEach((element,index)  =>  {
    element.addEventListener("click", ()=>{
        console.log(element);
       user.style.opacity="1";
       triangular.style.display="none";
      con.forEach(item =>{
         item.style.display="none";
        });

       element.style.display="block";
       element.classList.add("show")
       element.classList.add("winLight")




        setTimeout(() => {
           machine.style.opacity="1";
            setTimeout(()=> {
            computer[random].style.display="block";
            computer[random].classList.add("right");
          }, 1000);
          }, 500);

          setTimeout(()=>{
            if(random==index){
                winModel.style.display="grid";
                winner.innerHTML="TIE UP";

                //User logic
            }else if(index==0 && random==2 || index==1 && random==0 || index==2 && random==1){
              winModel.style.display="grid";
              nextmodel.style.display="flex";
              
              winner.innerHTML="YOU WIN";
             window.location.href="index1.html";


               count=score;              
               count++;
              scoreElem.innerText=count;
              
              localStorage.setItem("sc",JSON.stringify(count));


            }else{
             //computer logic

               count1=score1;
               count1++;
               scoreElem2.innerText=count1;
                localStorage.setItem("sc1",JSON.stringify(count1));

                winModel.style.display="grid";
                winner.innerHTML="YOU LOST";

               
            }
       },2000);

   })
});

//Button Actions



play.addEventListener("click",()=>{
    window.location.reload();
})


ruleBtn.addEventListener("click",()=>{
   rulemodel.style.display="flex";
})

let close=document.querySelector(".close");
close.addEventListener("click",()=>{
    rulemodel.style.display="none";

})

