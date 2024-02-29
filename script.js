const input = document.getElementById("input");
const list = document.getElementById("list-container");

function addTask() {
  if (input.value === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveTask();
}

listContainer.addEventListener("click", function(e) {
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveTask();
} else if (e.target.tagName === "SPAN") {
  e.target.parentElement.remove();
  saveTask()
}
}, false);

function saveTask() {
  localStorage.setItem("task", listContainer.innerHTML);
}

function viewTask() {
  listContainer.innerHTML = localStorage.getItem("task");
}

viewTask();