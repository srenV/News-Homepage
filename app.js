const menuBtn = document.getElementById('menuBtn');
const menuCloseBtn = document.querySelector('.menuCloseBtn');
const menu = document.getElementById('menu');
const main = document.querySelector('main')

menuBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(0em)';
    main.style.filter = 'blur(1em)'

});

menuCloseBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(20em)';
    main.style.filter = 'blur(0em)'
});

