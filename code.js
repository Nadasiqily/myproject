const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  
  
  if (task.length < 3) {
    alert("Task must be at least 3 characters long.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

   
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => taskList.removeChild(li));

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  
  saveTasks();

  
  taskInput.value = "";
});
function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#taskList li").forEach((li) => {
      tasks.push(li.firstChild.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = task;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => taskList.removeChild(li));
  
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
  }
  

  loadTasks();