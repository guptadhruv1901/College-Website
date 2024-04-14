const loginfrm = document.getElementById('form');
const content = document.querySelector('.main-content');
document.getElementById('cn2').addEventListener('click', function() {
    loginfrm.classList.add('active-popup');
    content.classList.add('active-popup');
    
    });
    const closebtn =document.querySelector('.icon-close');
closebtn.addEventListener('click',()=>{
    loginfrm.classList.remove('active-popup');
    content.classList.remove('active-popup');
    
});
const reglink = document.querySelector('.reg-link');
const loglink = document.querySelector('.log-link');
reglink.addEventListener('click', ()=>{
    loginfrm.classList.add('active');
});
loglink.addEventListener('click', ()=>{
    loginfrm.classList.remove('active');
});