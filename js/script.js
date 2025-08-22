// script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.sidebar');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        sidebar.classList.toggle('active');
    });
});