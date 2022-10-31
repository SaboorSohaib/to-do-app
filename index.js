const taskInput = document.getElementById('task-input');
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');

addTask.addEventListener('click', () => {

    const task = document.createElement('div');
    task.classList.add('task');

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    task.appendChild(completeBtn);

    const li = document.createElement('li');
    li.innerText = `${taskInput.value}`;
    task.appendChild(li);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML= '<i class="fa-solid fa-trash-can"></i>';
    deleteBtn.classList.add('delete-btn');
    task.appendChild(deleteBtn);
        
    if(taskInput.value === ""){
        alert('plaes enter task');
    } else {
        taskContainer.appendChild(task);
    }

    taskInput.value = "";

    checkbox.addEventListener('click', () => {
        checkbox.parentElement.style.textDecoration = 'line-through';
    })

    deleteBtn.addEventListener('click', (e) => {
        let target = e.target;
        target.parentElement.parentElement.remove();
    });
});
