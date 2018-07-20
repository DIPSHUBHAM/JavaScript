const colorbtn=document.querySelector('.colorbtn');
const bodybcg=document.querySelector('body');
 const color=['yellow','black','blue','#333'];

colorbtn.addEventListener('click',changecolor);
function changecolor(){
   
 let random =Math.floor(Math.random()*color.length)
 bodybcg.style.backgroundColor=color[random];
}
