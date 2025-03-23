let boxs=document.querySelectorAll(".boxes");
let restart=document.querySelector(".reStart");
let newgame=document.querySelector("#newgame");
let conclusion=document.querySelector("#conclusion");
let turn0=true
let win=0
const Win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
boxs.forEach((box) => {
  box.addEventListener("click",()=>{
    if(turn0==true)
    {
        turn0=false;
        box.innerText="O";
        box.style.color="green"
    }
    else
    {
        turn0=true;
        box.innerText="X";
         box.style.color="red"
    }
    box.disabled=true;
    winner();
  })
    
});
const disable=()=>
{
  for (let box of boxs){
      box.disabled=true;
  }
}
const enable=()=>
  {
    for (let box of boxs){
        box.disabled=false;
        box.innerText=""
    }
  }
  const showwinner=(win)=>
  {
     conclusion.innerText=" Congratulations!! Player "+win;
     conclusion.style.color="white"
     disable(); 
  }
  const isdraw = () => {
    let allFilled = [...boxs].every((box) => box.innerText !== "");
    if (allFilled && win === 0) {
      conclusion.innerText = "DRAW";
    }
  };
const winner=()=>{
    for(let pattern of Win){
     let pos1=boxs[pattern[0]].innerText;
     let pos2=boxs[pattern[1]].innerText;
     let pos3=boxs[pattern[2]].innerText;
     if(pos1 !="" && pos2!="" && pos3!="")
     {
        if(pos1 == pos2 && pos1==pos3)
        {
          showwinner(pos1);
          win=1;
        }
      }
    }
    isdraw();
}
const reset=()=>
  {
    win=0;
    turn0=true;
    enable();
    conclusion.innerText="";
};
restart.addEventListener("click",reset);
newgame.addEventListener("click",reset);
  