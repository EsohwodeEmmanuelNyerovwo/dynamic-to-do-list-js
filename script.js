document.addEventListener('DOMContentLoaded', function () {
    //Select Element
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const addButton = document.getElementById('add-task-btn');

    let tasks = [];

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            tasks = JSON.parse(storedTasks);
            tasks.forEach(taskText => {
                createTask(taskText);
            });
        }
    }

    function createTask(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");
        removeBtn.addEventListener('click', function () {
            removeTask(li, taskText);
        })
        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert('Enter a task');
        }
        else {
            tasks.push(taskText);
            createTask(taskText);
            saveTasks();

            taskInput.value = '';
        }
    }

    function removeTask(taskElem, taskText) {
        taskList.removeChild(taskElem);
        tasks = tasks.filter(task => task !== taskText);
        saveTasks();
    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function (event) {
        if (event.key) {
            addTask();
        }
    })

    loadTasks();
})