// let menu = document.querySelector('#menu-icon');
// let navlist = document.querySelector('.navlist');


// menu.onclick = ()=> {
//    menu.classList.toggle('bx-x');
//    navlist.classList.toggle('open');
// };

let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');

};


const sr = ScrollReveal ({
    distance: "65px",
    duration: 2600,
    dealy: 450,
    reset: true
});

ScrollReveal().reveal('.hero-text',{dealy:200,origin:'top'});
ScrollReveal().reveal('.hero-img',{dealy:450,origin:'top'});
ScrollReveal().reveal('.icons',{dealy:500,origin:'left'});
ScrollReveal().reveal('.scroll-down',{dealy:500,origin:'right'});
