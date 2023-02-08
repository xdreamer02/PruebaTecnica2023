import { saveTask, getAll, onSnapshot, collection, db, deleteTask } from './firebase.js';

const taskContainer = document.getElementById('task-container');
const taskButtom = document.getElementById('btn-task-save'); //btn-task-save  task-modal
const taskForm = document.getElementById('task-form');


window.addEventListener('DOMContentLoaded', async () => {

    onSnapshot(collection(db, 'tasks'), (querySnapshot) => {
        let html = '';
        querySnapshot.forEach(doc => {

            const tasks = doc.data();
            html += `
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="https://cdn.pixabay.com/photo/2014/04/03/11/47/avatar-312160_960_720.png" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${tasks.title}</h5>
                        <p class="card-text">DNI: ${tasks.description}</p>
                        <p class="card-text">NACIMIENTO: ${tasks.description}</p>
                        <p class="card-text">SEXO: ${tasks.description}</p>
                        <p class="card-text">EDAD:${tasks.description}</p>
                        
                        <button type="button" class="btn btn-warning" data-id="${doc.id}">Editar</button>
                        <button type="button" class="btn btn-danger" data-id="${doc.id}">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
            `
        })

        taskContainer.innerHTML = html;
        const btnDelete = taskContainer.querySelectorAll('.btn-danger');
        btnDelete.forEach(btn => {
            btn.addEventListener('click', ({ target: { dataset } }) => {
                //console.log(dataset.id);
                deleteTask(dataset.id);
            });
        });

        const btnEdit = taskContainer.querySelectorAll('.btn-warning');
        btnEdit.forEach(btn => {
            btn.addEventListener('click', ({ target: { dataset } }) => {
                console.log(dataset.id);

            });
        });

    });

});



taskButtom.addEventListener('click', (e) => {
    e.preventDefault();

    //console.log('boton');

    const title = taskForm['task-tittle'];
    const description = taskForm['task-description'];

    saveTask(title.value, description.value);
    taskForm.reset();
});