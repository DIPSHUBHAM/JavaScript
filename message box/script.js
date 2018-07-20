const sendbtn=document.querySelector('#sendbtn');
const messagein=document.querySelector('#messagein');
const messageout=document.querySelector('#messageout');
sendbtn.addEventListener('click',sendmsg)
function  sendmsg(){
    let content=messagein.value;
    // console.log(content);
    if (content === '') {
        alert("Please enter your message");
    }
    else{
        messageout.innerHTML=content;
        messagein.value='';
    }
    
}