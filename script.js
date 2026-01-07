function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") return;

    const time = new Date().toLocaleString();

    const li = document.createElement("li");

    li.innerHTML = `
        <div class="task-text">${text}</div>
        <div class="time">Added: ${time}</div>
        <div class="actions">
            <button class="complete">Complete</button>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;

    document.getElementById("pendingList").appendChild(li);
    input.value = "";

    li.querySelector(".complete").onclick = () => completeTask(li);
    li.querySelector(".edit").onclick = () => editTask(li);
    li.querySelector(".delete").onclick = () => li.remove();
}

function completeTask(task) {
    const time = new Date().toLocaleString();
    task.querySelector(".time").innerHTML = "Completed: " + time;
    task.querySelector(".complete").remove();
    document.getElementById("completedList").appendChild(task);
}

function editTask(task) {
    const textDiv = task.querySelector(".task-text");
    const newText = prompt("Edit task:", textDiv.innerText);
    if (newText) textDiv.innerText = newText;
}
