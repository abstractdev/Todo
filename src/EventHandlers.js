const submitProject = document.querySelector("#submit-project");
const projectForm = document.querySelector("#project-form");
const projectTitle = document.querySelector("#project-title");
const projectModalContainer = document.querySelector(
  ".project-modal-container"
);
const newTaskButton = document.querySelector(".new-task-button");
const submitTask = document.querySelector("#submit-task");
const taskTitle = document.querySelector("#title");
const editTaskTitle = document.querySelector("#edit-title");
const taskDescription = document.querySelector("#description");
const editTaskDescription = document.querySelector("#edit-description");
const taskDueDate = document.querySelector("#dueDate");
const editTaskDueDate = document.querySelector("#edit-dueDate");
const taskNotes = document.querySelector("#notes");
const editTaskNotes = document.querySelector("#edit-notes");
const taskForm = document.querySelector("#task-form");
const taskModalContainer = document.querySelector("#task-modal-container");

export function handleNewProjectEventListener (storeProjectDataInArray, renderApp) {
  submitProject.addEventListener("click", (e) => {
    e.preventDefault();
    storeProjectDataInArray(projectTitle.value);
    projectForm.reset();
    projectModalContainer.classList.remove("show");
    newTaskButton.classList.remove("hide");
    renderApp();
  })
}

export function handleNewTaskEventListener (storeTaskDataInArray, renderApp) {
  submitTask.addEventListener("click", (e) => {
    e.preventDefault();
    storeTaskDataInArray(
      taskTitle.value,
      taskDescription.value,
      taskDueDate.value,
      taskNotes.value
    );
    taskForm.reset();
    taskModalContainer.classList.remove("show");
    renderApp();
  });
}

