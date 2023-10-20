const ftList = document.getElementById("ft_list");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
    ftList.innerHTML = "";
    tasks.forEach(function (task) {
        const taskItem = document.createElement("div");
        taskItem.textContent = task;
        taskItem.addEventListener("click", function () {
            if (confirm("¿Desea eliminar esta tarea?")) {
                const taskIndex = tasks.indexOf(task);
                tasks.splice(taskIndex, 1);
                saveTasks();
                displayTasks();
            }
        });
        ftList.appendChild(taskItem);
    });
}

function newElement() {
    const task = prompt("Añadir nueva tarea:");
    if (task) {
        tasks.unshift(task);
        // tasks.push(task);
        saveTasks();
        displayTasks();
    }
}

window.onload = function () {
    displayTasks();
};

