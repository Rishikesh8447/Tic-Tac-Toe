let currentPlayer="X";
let arr=Array(9).fill(null);
let gameOver=false;

function showResult(msg){
document.getElementById("result").innerText=msg;
}

function checkWinner(){
if(( arr[0]!==null && arr[0]===arr[1] && arr[1]===arr[2])||
(arr[3]!==null && arr[3]===arr[4] && arr[4]===arr[5])||
(arr[6]!==null && arr[6]===arr[7] && arr[7]===arr[8]) ||
(arr[0]!==null && arr[0]===arr[3] && arr[3]===arr[6])||
(arr[1]!==null && arr[1]===arr[4] && arr[4]===arr[7])||
(arr[2]!==null && arr[2]===arr[5] && arr[5]===arr[8])||
(arr[0]!==null && arr[0]===arr[4] && arr[4]===arr[8])||
(arr[2]!==null && arr[2]===arr[4] && arr[4]===arr[6]
)){
showResult(`Winner is ${currentPlayer}`);
gameOver=true;
return true;
}
{
   if(!arr.some((e)=>e===null)){
    showResult(`Draw!!`);
    gameOver=true;
    return true;
   } 
}
return false;
}
function handleClick(el){
   if(gameOver) return;
   const id=Number(el.id);
   if(arr[id]!==null) return;
   arr[id]=currentPlayer;
   el.innerText=currentPlayer;
   if(checkWinner()) return;
   currentPlayer=currentPlayer==="X"?"O":"X";
}
