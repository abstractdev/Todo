import {Display} from "./Display.js";
import {Project} from "./Project.js"
import {Task} from "./Task.js"

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
}

