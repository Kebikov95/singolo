const MENU = document.getElementById('menu')

/* Header - jump to anchors */
MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('li > a').forEach(el => { el.classList.remove('active') });
    event.target.classList.add('active');
})