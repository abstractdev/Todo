import { Display } from "./Display";
import { setProject, getProjects, setProjects, getAllProjects } from "./FirebaseFunctions";

const submitProject = document.querySelector("#submit-project");
const editSubmitProject = document.querySelector("#edit-submit-project");
const projectForm = document.querySelector("#project-form");
const projectTitle = document.querySelector("#project-title");
const editProjectTitle = document.querySelector("#edit-project-title");
const projectModalContainer = document.querySelector(
  ".project-modal-container"
);
const editProjectModalContainer = document.querySelector(
  ".edit-project-modal-container"
);
const allProjects = document.querySelector("#all-projects");
const topText = document.querySelector(".top-text");
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
const mainContentContainer = document.querySelector(".main-content-container")

export function handleNewProjectEventListener (storeProjectInArray) {
  submitProject.addEventListener("click", (e) => {
    e.preventDefault();
    storeProjectInArray(projectTitle.value);
    projectForm.reset();
    projectModalContainer.classList.remove("show");
    newTaskButton.classList.remove("hide");
  })
}

export function handleDeleteProjectEventListener(deleteProjectFromArray) {
  mainContentContainer.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.className === "projectsDeleteButton") {
      deleteProjectFromArray(parseInt(e.target.closest(".projectsDisplay").dataset.id));
      e.target.closest(".projectsDisplay").remove();
    }
  });
}

export function handleEditProjectEventListener(editProject) {
  editSubmitProject.addEventListener("click", (e) => {
    e.preventDefault();
    editProject(e.target.dataset.id, editProjectTitle.value);
    editProjectModalContainer.classList.remove("show");
  });
}

export function handleAllProjectsEventListener(showAllProjects) {
  allProjects.addEventListener("click", (e) => {
    topText.textContent = "All Projects";
    newTaskButton.classList.add("hide");
    showAllProjects();
  });
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
  });
}

  export function handleDeleteTaskEventListener(deleteTaskFromArray) {
    mainContentContainer.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.className === "tasksDeleteButton") {
      deleteTaskFromArray(parseInt(e.target.closest(".tasksDisplay").dataset.id));
      e.target.closest(".tasksDisplay").remove();
    }
  });
}
