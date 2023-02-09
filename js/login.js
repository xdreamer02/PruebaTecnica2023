import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import { auth } from './firebase.js'


const loginForm = document.querySelector('#login-form')

loginForm.addEventListener('submit', async e => {
    e.preventDefault()
    const email = loginForm['email-login'].value;
    const pass = loginForm['pass-login'].value;

    try {
        const credencial = await signInWithEmailAndPassword(auth, email, pass)
        console.log(credencial);
        window.location.assign('../html/index.html')
    } catch (error) {
        console.log(error)

    }

})