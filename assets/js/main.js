window.addEventListener("scroll", function(){
    const header = document.querySelector('header');
    header.classList.toggle('pegar', window.scrollY > 0);
});

// Menu na responsivivdade 
const navegar = document.querySelector('nav');
document.querySelector('.toggle').onclick = function() {
    this.classList.toggle('active');
    navegar.classList.toggle('active');
}