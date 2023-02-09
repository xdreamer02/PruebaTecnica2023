import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import { auth } from './firebase.js'



const registroForm = document.querySelector('#register-form');

registroForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const correo = registroForm['email-reg'].value
    const clave = registroForm['pass-reg'].value


    try {
        const userCredencials = await createUserWithEmailAndPassword(auth, correo, clave)
        console.log(correo, clave)
        console.log(userCredencials)

    } catch (error) {

        console.log('error al registrar :' + error.message)

    }
})

