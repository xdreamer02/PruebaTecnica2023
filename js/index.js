import { saveTask, getAll, onSnapshot, collection, db, deleteTask, getTask } from './firebase.js';

const taskContainer = document.getElementById('task-container');
const taskButtom = document.getElementById('btn-task-save'); //btn-task-save  task-modal
const taskForm = document.getElementById('task-form');
//update
export const uid = "";




window.addEventListener('DOMContentLoaded', async () => {

    onSnapshot(collection(db, 'tasks'), (querySnapshot) => {
        let html = '';
        querySnapshot.forEach(doc => {

            const tasks = doc.data();
            const mujer_img = "https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_960_720.png";
            const hombre_img = "https://cdn.pixabay.com/photo/2014/04/03/11/47/avatar-312160_960_720.png";
            let valor_img = "";

            if (tasks.sexo.toLowerCase() == "masculino" || tasks.sexo.toLowerCase() == "m") {
                valor_img = hombre_img;
            } else {
                valor_img = mujer_img;
            }

            html += `
            <div class="card mb-3" style="max-width: 540px;" id="card-lista">
            <div class="row g-0">
                <div class="col-md-4">

                    <img id="image-card" src="${valor_img}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${tasks.nombresC}</h5>
                        <p class="card-text">DNI: ${tasks.dni}</p>
                        <p class="card-text">Edad: ${tasks.edad}</p>
                        <p class="card-text">Nacimiento: ${tasks.lugar}</p>
                        <p class="card-text">Genero:${tasks.sexo}</p>
                        
                        <button type="button" class="btn btn-warning"  data-id="${doc.id}">Editar
                        <button type="button" class="btn btn-danger" data-id="${doc.id}">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
            `
        })


        /*
        
        
        */

        taskContainer.innerHTML = html;
        const btnDelete = taskContainer.querySelectorAll('.btn-danger');
        btnDelete.forEach(btn => {
            btn.addEventListener('click', ({ target: { dataset } }) => {
                //console.log(dataset.id);
                deleteTask(dataset.id);
            });
        });

        const btnEdit = taskContainer.querySelectorAll('.btn-warning');
        btnEdit.forEach((btn) => {
            btn.addEventListener('click', async (e) => {
                //console.log(dataset.id);
                sessionStorage.setItem("user_id_edit", e.target.dataset.id);
                window.location.assign('../html/update.html')
                //const doc = await getTask(e.target.dataset.id);
                //const taskss = doc.data();
                //taskEdit['task-nombres'].value = taskss.nombresC;*/
                console.log(doc.data());
            });
        });


    });

});



//index
taskButtom.addEventListener('click', (e) => {
    e.preventDefault();

    //console.log('boton');

    const nombres = taskForm['task-nombres'];
    const edad = taskForm['task-edad'];
    const genero = taskForm['task-genero'];
    const lugarNac = taskForm['task-lugar'];
    const dni = taskForm['task-dni'];

    saveTask(nombres.value, edad.value, genero.value, lugarNac.value, dni.value);
    taskForm.reset();
    //close modal
    const insertModal = document.querySelector('#task-modal');
    const modal = bootstrap.Modal.getInstance(insertModal);
    modal.hide();

});
