let boxes = document.querySelectorAll(".box");
let reset=document.querySelector(".reset")
let newGamebtn= document.querySelector("#new-btn")
let msgcontainer =document.querySelector(".msg-container")
let msg= document.querySelector(".msg")
let turnO = true;
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
boxes.forEach(box => {
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turnO){
            box.innerText="O"
            turnO=false;
        }else{
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;
        checkWinner();

    })
});
const disabled=()=>{
    boxes.forEach(box => {
        box.disabled=true;
    });
}
const enabled=()=>{
    boxes.forEach(box => {
        box.disabled=false;
        box.innerText=""

    });
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`
    msgcontainer.classList.remove("hide");
    disabled();
}
const checkWinner=()=>{
    for(let pattern of winpatterns){
       let val1=boxes[pattern[0]].innerText
        let val2=boxes[pattern[1]].innerText
         let val3=boxes[pattern[2]].innerText
         if(val1 !=" " && val2 !=" "&& val3!=""){
            if(val1=== val2 &&val2===val3 && val1===val3){
                console.log("winner",val1)

                showWinner(val1);
                enabled();
            }
         }
    }

}
const resetgame=()=>{
    turnO=true;
    enabled();
    msgcontainer.classList.add("hide")

}
newGamebtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);