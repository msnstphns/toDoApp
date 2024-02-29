const input = document.getElementById("input");
const list = document.getElementById("list-container");

function addTask() {
  if (input.value === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);
  }
}
