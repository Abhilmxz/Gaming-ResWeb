Let menu = document.querySelector('#menu-icon');
Let navlist = document.querySelector('.navlist');

menu.onclick = () => {
   menu.classList.toggle('bx-x');
   navlist.classList.toggle('open');
};

const sr = scrollreveal ({
    distance: "65px",
    duration: 2600,
    dealy: 450,
    reset: true
});

sr.reveal('.hero-text',{dealy:200,origin:'top'});
sr.reveal('.hero-img',{dealy:450,origin:'top'});
sr.reveal('.icons',{dealy:500,origin:'left'});
sr.reveal('.scroll-down',{dealy:500,origin:'right'});