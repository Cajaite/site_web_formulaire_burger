const form = document.querySelector('form');
const pseudo = document.getElementById('pseudo');
const email = document.getElementById('email');
const password = document.getElementById('mdp')
const erreur = document.querySelector('.erreur');


function isValidPassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-])/;

    if (regex.test(password)) {
        erreur.textContent = ''
        return true
    } else {
        erreur.textContent = 'Le mot de passe doit contenir une majuscule, une minuscule, un chiffre et un caractère spécial.'
        erreur.style.color = 'red'
        return false
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (isValidPassword(password.value)) {
        erreur.textContent = 'Connexion réussi.'
        erreur.style.color = 'green'
    }
})



