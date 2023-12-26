const btnToggle = document.querySelector('.bouton_nuit');
const body = document.querySelector('body');

btnToggle.addEventListener('click', () => {
    body.classList.toggle('dark')
    if (body.classList.contains('dark')) {
        btnToggle.textContent = "Light"
    } else {
        btnToggle.textContent = "Dark"
    }
})