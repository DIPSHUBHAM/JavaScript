const quotes=[{
    name:'Coco Chanel',
    quote:'Success is most often achieved by those who don’t know that failure is inevitable',
},
{
name:'Kanye West',
quote: 'I refuse to accept other people’s ideas of happiness for me. As if there’s a one size fits all standard for happiness',
},
{
    name:'Coco Chanel',
    quote:'There is only one way to avoid criticism do nothing say nothing and be nothing',
},
]
const auotebtn=document.querySelector('#quotebtn');
const qutoeAuthor=document.querySelector('#quoteAuthor');
const quote=document.querySelector('#quote');
quotebtn.addEventListener('click',dispalyquote);
function dispalyquote(){
    let number=Math.floor(Math.random()*quotes.length);
    // console.log(number);
    qutoeAuthor.innerHTML=quotes[number].name;
    qutoeAuthor.innerHTML=quotes[number].quote;
 }



