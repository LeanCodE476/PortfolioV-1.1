const btnBurguer = document.querySelector(".panel-btn"),
    menu = document.querySelector(".container-header");

btnBurguer.addEventListener("click", () => {
        menu.classList.toggle("is-active-efect");
        btnBurguer.classList.toggle("is-active");
    })
window.sr = ScrollReveal();
sr.reveal('.container-contact-footer', {
    duration: 2000,
});
sr.reveal('.container-skills', {
    duration: 1200,
   
});
sr.reveal('.parrafo-about-me', {
    duration: 1100,
    origin: 'top',
    distance:'120px'
});
sr.reveal('.briefcase-section', {
    duration: 1600,
});
const dialog = document.querySelector('dialog'),
    cancel = document.querySelector('#cancel'),
    show = document.querySelector('#show');
show.addEventListener('click', () => dialog.showModal())
    cancel.addEventListener('click',()=>dialog.close())



      