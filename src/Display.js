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
  function renderTasks(taskArray) {
    while (mainContainer.firstChild) {
      mainContainer.removeChild(mainContainer.firstChild);
    }
    taskArray.forEach((element) => {
      const tasksDisplay = document.createElement("div");
      tasksDisplay.classList.add("tasksDisplay");
      tasksDisplay.setAttribute(
        "data-id",
        taskArray[taskArray.indexOf(element)].id.toString()
      );
      mainContainer.appendChild(tasksDisplay);
      const tasksDisplayLeftContainer = document.createElement("div");
      tasksDisplayLeftContainer.classList.add("tasksDisplayLeftContainer");
      const tasksText = document.createElement("div");
      tasksText.classList.add("tasksText");
      tasksText.textContent = element.title;
      const tasksCheckBox = document.createElement("div");
      tasksCheckBox.classList.add("tasksCheckBox");
      const tasksDisplayRightContainer = document.createElement("div");
      tasksDisplayRightContainer.classList.add("tasksDisplayRightContainer");
      const tasksEditIconContainer = document.createElement("div");
      tasksEditIconContainer.classList.add("tasksEditIconContainer");
      const tasksEditIcon = document.createElement("span");
      tasksEditIcon.classList.add("fa-solid");
      tasksEditIcon.classList.add("fa-pen");
      tasksEditIcon.setAttribute("id", "tasksEditIcon");
      const tasksDeleteButton = document.createElement("button");
      tasksDeleteButton.classList.add("tasksDeleteButton");
      tasksDeleteButton.textContent = "Del";
      const dropdownContainer = document.createElement("div");
      dropdownContainer.classList.add("dropdownContainer");
      const dropdown = document.createElement("div");
      dropdown.classList.add("dropdown");
      const dropdownButton = document.createElement("button");
      dropdownButton.classList.add("dropdownButton");
      dropdownButton.textContent = "Priority";
      const dropdownContent = document.createElement("div");
      dropdownContent.classList.add("dropdownContent");
      dropdownContent.setAttribute(
        "data-dropdown",
        taskArray[taskArray.indexOf(element)].id.toString()
      );
      const lowPriority = document.createElement("a");
      lowPriority.textContent = "low";
      lowPriority.href = "#";
      lowPriority.classList.add("lowPriority");
      const mediumPriority = document.createElement("a");
      mediumPriority.textContent = "medium";
      mediumPriority.href = "#";
      mediumPriority.classList.add("mediumPriority");
      const highPriority = document.createElement("a");
      highPriority.textContent = "high";
      highPriority.href = "#";
      highPriority.classList.add("highPriority");
      tasksDisplay.appendChild(tasksDisplayLeftContainer);
      tasksDisplayLeftContainer.appendChild(tasksCheckBox);
      tasksDisplayLeftContainer.appendChild(tasksText);
      tasksDisplay.appendChild(tasksDisplayRightContainer);
      tasksDisplayRightContainer.appendChild(tasksEditIconContainer);
      tasksEditIconContainer.appendChild(tasksEditIcon);
      tasksDisplayRightContainer.appendChild(dropdownContainer);
      dropdownContainer.appendChild(dropdown);
      dropdown.appendChild(dropdownButton);
      dropdown.appendChild(dropdownContent);
      dropdownContent.appendChild(lowPriority);
      dropdownContent.appendChild(mediumPriority);
      dropdownContent.appendChild(highPriority);
      dropdownContainer.appendChild(dropdown);
      tasksDisplayRightContainer.appendChild(tasksDeleteButton);

      const addDropdownListeners = (() => {
        dropdownButton.addEventListener("click", (e) => {
          if (e.target.className === "dropdownButton") {
            document
              .querySelector(
                `[data-dropdown="${taskArray[
                  taskArray.indexOf(element)
                ].id.toString()}"]`
              )
              .classList.toggle("showDropdown");
          }
        });
      })();
      const displayCompleteStatus = (() => {
        if (taskArray[taskArray.indexOf(element)].complete === true) {
          tasksText.style.textDecoration = "line-through";
          tasksCheckBox.style.backgroundColor = "#32fbe2";
        }
      })();

      const displayPriorityStatus = (() => {
        switch (taskArray[taskArray.indexOf(element)].priority) {
          case "low":
            dropdownButton.style.backgroundColor = "green";
            break;
          case "medium":
            dropdownButton.style.backgroundColor = "#ffc107";
            break;
          case "high":
            dropdownButton.style.backgroundColor = "#e44c55";
            break;
        }
      })();
      const renderEditTaskModal = (() => {
        tasksDisplay.addEventListener("click", (e) => {
          if (
            e.target.className === "tasksText" ||
            e.target.id === "tasksEditIcon"
          ) {
            editTaskTitle.value = taskArray[taskArray.indexOf(element)].title;
            editTaskDescription.value =
              taskArray[taskArray.indexOf(element)].description;
            editTaskDueDate.value =
              taskArray[taskArray.indexOf(element)].dueDate;
            editTaskNotes.value = taskArray[taskArray.indexOf(element)].notes;
            editTaskModalContainer.classList.add("show");
            editSubmitTask.setAttribute(
              "data-id",
              taskArray[taskArray.indexOf(element)].id.toString()
            );
          }
        });
      })();
    });
  }
  function renderNewProjectModal() {
    this.openProject.addEventListener("click", () => {
      this.projectModalContainer.classList.add("show");
    });
  }
  function renderNewTaskModal() {
    this.newTask.addEventListener("click", () => {
      this.taskModalContainer.classList.add("show");
      this.taskTitle.focus();
      this.taskDueDate.valueAsDate = new Date();
    });
  }
  function clickOutsideCloseModal() {
    window.onclick = function(event) {
      if(event.target === document.querySelector("#task-modal-container")) {
        document.querySelector("#task-modal-container").classList.remove("show")
      }
      if(event.target === document.querySelector("#edit-task-modal-container")) {
        document.querySelector("#edit-task-modal-container").classList.remove("show");
      }
      if(event.target === document.querySelector(".project-modal-container")) {
        document.querySelector(".project-modal-container").classList.remove("show");
      }
      if(event.target === document.querySelector(".edit-project-modal-container")) {
        document.querySelector(".edit-project-modal-container").classList.remove("show");
      }
    }
  }
}

export default Display;
