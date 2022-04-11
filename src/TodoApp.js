import {Display} from "./Display.js";
import {Project} from "./Project.js"
import {Task} from "./Task.js"
import { createIdForArrayElements } from "./IdFunctions.js";

export const TodoApp = () => {
  const projectsArray = [];
  const tasksArray= [];
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

  const renderApp = () => {
    Display.renderTasks(tasksArray);
    Display.renderProjectsSidebar(projectsArray);
  }
  const initModals = () => {
    Display.renderNewProjectModal();
    Display.renderNewTaskModal();
    Display.clickOutsideCloseModal();
  }
  const initDisplay = (() => {
    initModals()
    renderApp()
    })()


    function storeProjectDataInArray (title){
      const newProject = Project();
      projectsArray.push(newProject);
      createIdForArrayElements(projectsArray);
      newProject.title = title;
      renderApp();
    }
  const handleNewProjectEventListener = (() => {
    submitProject.addEventListener("click", (e) => {
      e.preventDefault();
      storeProjectDataInArray(projectTitle.value);
      projectForm.reset();
      projectModalContainer.classList.remove("show");
      newTaskButton.classList.remove("hide");
      renderApp();
    })
  })()

  function storeTaskDataInArray(title, description, dueDate, notes) {
      let newTask = Task();
      newTask.title = title;
      // newTask.projectId = this.model.currentProject.id;
      newTask.description = description;
      newTask.dueDate = dueDate;
      newTask.notes = notes;
      // model.currentProject.array.push(newTask);
      tasksArray.push(newTask);
      createIdForArrayElements(tasksArray);
      renderApp();
      // if (view.mainContainerTopText.textContent === "All Tasks") {
      //   view.renderTasks(taskArray);
      // } else if (view.mainContainerTopText.textContent === "Today") {
      //   view.renderTasks(todayTaskArray);
      // } else {
      //   view.renderTasks(currentProject.array);
      // }
  }

  const handleTaskEventListener = (() => {
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
  })()
}