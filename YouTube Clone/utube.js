const menuToggle=document.querySelector('.menu-toggle');
const sidebar=document.querySelector('.sidebar');

menuToggle.addEventListener('click',() =>{
    sidebar.classList.toggle('visible');
    sidebar.classList.toggle('hidden');
    menuToggle.classList.toggle('close');
});