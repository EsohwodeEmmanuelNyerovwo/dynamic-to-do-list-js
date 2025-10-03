document.addEventListener('DOMContentLoaded', function () {
    //Select Element
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const addButton = document.getElementById('add-task-btn');

    //function to add task
    function addTask() {
        //check if textbox is empty and also perform the trim function
        const taskText = (taskInput.value);
        if (taskText === ''.trim()) {
            alert('Enter a task');
            return;
        }
        //create the li element
        const li = document.createElement('li');
        li.textContent = taskText;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        }
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        //clear the input
        taskInput.value = '';
    }
    //Attach EventListeners
    addButton.addEventListener('click', (event) => {
        addTask();
    })
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    })
})