function addTask() {

    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = taskText;

    span.onclick = function () {
        span.classList.toggle("completed");
    };

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    deleteButton.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}