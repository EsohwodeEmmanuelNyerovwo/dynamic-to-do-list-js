document.addEventListener('DOMContentLoaded', function () {
    //Select Element
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    //function to add task
    function addTask() {
        //check if textbox is empty and also perform the trim function
        const taskText = (taskInput.value || '').trim();
        console.log(taskText);
        if (!taskText) {
            alert('Enter a task');
        }
        else {
            //create the li element
            const li = document.createElement('li');
            li.textContent = taskText;
            const button = document.createElement('button');
            button.textContent = 'Remove';
            button.className = 'remove-btn';
            button.onclick = function () {
                taskList.removeChild(li);
            }
            li.appendChild(button);
            taskList.appendChild(li);

            //clear the input
            taskInput.value = '';
        }
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