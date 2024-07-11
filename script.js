let btn = document.querySelector('#btn');
let body = document.querySelector('body');
let nav = document.querySelector('.navbar');
let btn1=document.querySelector('.nav-buttons')

btn1.addEventListener('click',(ev)=>{
    console.log("you clicked button");

})

document.addEventListener('scroll',(ev)=>{
    // console.log('Scrolled',window.scrollY);

    if(window.scrollY>810){
        nav.classList.add('white');
        nav.classList.remove('orange');
    }
    else{
        nav.classList.add('orange');
        nav.classList.remove('white');
    }
})