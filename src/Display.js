import Task from "./Task";

function Display() {
  const newTask = document.querySelector("#new-task");
  const taskModalContainer = document.querySelector("#task-modal-container");
  const editTaskModalContainer = document.querySelector(
    "#edit-task-modal-container"
  );
  const submitTask = document.querySelector("#submit-task");
  const editSubmitTask = document.querySelector("#edit-submit-task");
  const taskForm = document.querySelector("#task-form");
  const openProject = document.querySelector("#open-project");
  const submitProject = document.querySelector("#submit-project");
  const editSubmitProject = document.querySelector("#edit-submit-project");
  const projectModalContainer = document.querySelector(
    ".project-modal-container"
  );
  const editProjectModalContainer = document.querySelector(
    ".edit-project-modal-container"
  );
  const projectForm = document.querySelector("#project-form");
  const projectTitle = document.querySelector("#project-title");
  const editProjectTitle = document.querySelector("#edit-project-title");
  const taskTitle = document.querySelector("#title");
  const editTaskTitle = document.querySelector("#edit-title");
  const taskDescription = document.querySelector("#description");
  const editTaskDescription = document.querySelector("#edit-description");
  const taskDueDate = document.querySelector("#dueDate");
  const editTaskDueDate = document.querySelector("#edit-dueDate");
  const taskNotes = document.querySelector("#notes");
  const editTaskNotes = document.querySelector("#edit-notes");
  const mainContainerTop = document.querySelector(".main-container-top");
  const mainContainerTopTextContainer = document.querySelector(
    ".main-container-top-text-container"
  );
  const mainContainerTopText = document.querySelector(
    ".main-container-top-text"
  );
  const mainContainer = document.querySelector(".main-container");
  const projectsContainer = document.querySelector(".projects-container");
  const allProjects = document.querySelector("#all-projects");
  const allTasks = document.querySelector("#all-tasks");
  const container = document.querySelector(".container");
  const taskModal = document.querySelector(".task-modal");
  const todayButton = document.querySelector(".today-button");

  function renderAllProjects(projectArray) {
    while (mainContainer.firstChild) {
      mainContainer.removeChild(mainContainer.firstChild);
    }
    projectArray.forEach((element) => {
      const projectsDisplay = document.createElement("div");
      projectsDisplay.classList.add("projectsDisplay");
      projectsDisplay.setAttribute(
        "data-id",
        projectArray[projectArray.indexOf(element)].id.toString()
      );
      mainContainer.appendChild(projectsDisplay);
      const projectsText = document.createElement("div");
      projectsText.classList.add("projectsText");
      projectsText.textContent = element.title;
      projectsDisplay.appendChild(projectsText);
      const projectsDisplayRightContainer = document.createElement("div");
      projectsDisplayRightContainer.classList.add(
        "projectsDisplayRightContainer"
      );
      const projectsEditIconContainer = document.createElement("div");
      projectsEditIconContainer.classList.add("projectsEditIconContainer");
      const projectsEditIcon = document.createElement("i");
      projectsEditIcon.classList.add("fa-solid");
      projectsEditIcon.classList.add("fa-pen");
      projectsEditIcon.setAttribute("id", "projectsEditIcon");
      const projectsDeleteButton = document.createElement("button");
      projectsDeleteButton.classList.add("projectsDeleteButton");
      projectsDeleteButton.textContent = "Del";
      projectsDisplay.appendChild(projectsDisplayRightContainer);
      projectsDisplayRightContainer.appendChild(projectsEditIconContainer);
      projectsEditIconContainer.appendChild(projectsEditIcon);
      projectsDisplayRightContainer.appendChild(projectsDeleteButton);

      const renderEditProjectModal = (() => {
        projectsDisplay.addEventListener("click", (e) => {
          if (
            e.target.className === "projectsText" ||
            e.target.id === "projectsEditIcon"
          ) {
            editProjectTitle.value =
              projectArray[projectArray.indexOf(element)].title;
            editProjectModalContainer.classList.add("show");
            editSubmitProject.setAttribute(
              "data-id",
              e.target.parentNode.dataset.id
            );
          }
        });
      })();
    });
  }
}

export default Display;
