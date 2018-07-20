const nextbtn=document.querySelector('.nextbtn');
const prebtn=document.querySelector('.prebtn');
const container=document.querySelector('.images');
let counter=0;
nextbtn.addEventListener('click',nextSlide);
prebtn.addEventListener('click',preSlide);
 function nextSlide(){
     container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'})
     if(counter===3){
         counter=-1;
     }
    counter++;
    container.style.backgroundImage=`url(img_${counter}.jpg`
 }
 function preSlide(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'})
    if(counter===0){
        counter=4;
    }
   counter--;
   container.style.backgroundImage=`url(img_${counter}.jpg`
}