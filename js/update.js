import { saveTask, getAll, onSnapshot, collection, db, deleteTask, getTask, updateTask } from './firebase.js';

const updateForm = document.querySelector('#task-edit');
const btnupt = document.getElementById('btn-edit');
const user_id = sessionStorage.getItem("user_id_edit");


const nombre_input = document.getElementById('floatingNombres')
const dni_input = document.getElementById('floatingDNI')
const edad_input = document.getElementById('floatingEdad')
const fecNac_input = document.getElementById('floatingFecNac')
const lugar_input = document.getElementById('floatingLugar')
const genero_input = document.getElementById('floatingGenero')
const estadoC_input = document.getElementById('floatingEstado')
const departmento_input = document.getElementById('floatingDepartamento')
const distrito_input = document.getElementById('floatingDistrito')

if (user_id) {


    const doc = await getTask(user_id);
    const user = doc.data();

    nombre_input.value = user.nombresC
    dni_input.value = user.dni
    edad_input.value = user.edad
    //fecNac_input.value = user.lugar
    lugar_input.value = user.lugar
    genero_input.value = user.sexo
    //estadoC_input.value = user.estado
    //departmento_input.value = user.departmento
    //distrito_input.value = user.distrito

}




btnupt.addEventListener('click', async (e) => {
    e.preventDefault()



    try {

        updateTask(user_id, {
            nombresC: nombre_input.value, edad: edad_input.value, sexo: genero_input.value, lugar: lugar_input.value, dni: dni_input.value
        })
        console.log('actualiazdo')
    } catch (error) {
        console.log(error)
    }
})



