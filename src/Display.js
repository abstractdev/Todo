import {TodoApp} from "./TodoApp";

export const Display = (() => {
  
  const taskModalContainer = document.querySelector("#task-modal-container");
  const editTaskModalContainer = document.querySelector(
    "#edit-task-modal-container"
  );
  const submitTask = document.querySelector("#submit-task");
  const editSubmitTask = document.querySelector("#edit-submit-task");
  const taskForm = document.querySelector("#task-form");
  const newProjectButton = document.querySelector(".new-project-button ");
  const newTaskButton = document.querySelector(".new-task-button");
  const editSubmitProject = document.querySelector("#edit-submit-project");
  
  const editProjectModalContainer = document.querySelector(
    ".edit-project-modal-container"
  );
  const projectModalContainer = document.querySelector(
    ".project-modal-container"
  );
  const editProjectTitle = document.querySelector("#edit-project-title");
  const taskTitle = document.querySelector("#title");
  const editTaskTitle = document.querySelector("#edit-title");
  const taskDescription = document.querySelector("#description");
  const editTaskDescription = document.querySelector("#edit-description");
  const taskDueDate = document.querySelector("#dueDate");
  const editTaskDueDate = document.querySelector("#edit-dueDate");
  const taskNotes = document.querySelector("#notes");
  const editTaskNotes = document.querySelector("#edit-notes");
  const sidebarContainer = document.querySelector(".sidebar-container")
  const projectsContainer = document.querySelector(".projects-container");
  const allProjects = document.querySelector("#all-projects");
  const allTasks = document.querySelector("#all-tasks");
  const container = document.querySelector(".container");
  const taskModal = document.querySelector(".task-modal");
  const todayButton = document.querySelector(".today-button");
  const mainContainer = document.querySelector(".main-container");
  const mainContentContainer = document.querySelector(".main-content-container");
  const mainProjectsContainer = document.querySelector(".main-projects-container");
  const mainTasksContainer = document.querySelector(".main-tasks-container");
  const submitProject = document.querySelector("#submit-project");
const projectForm = document.querySelector("#project-form");
const projectTitle = document.querySelector("#project-title");
const topText = document.querySelector(".top-text");
let currentProjectId;

function initCurrentProject(){
  if (!currentProjectId) {
    currentProjectId = 'Default'
  }
}

  return {
    initCurrentProject,
    renderAllProjects(projectsArray) {
      while (mainContentContainer.firstChild) {
        mainContentContainer.removeChild(mainContentContainer.firstChild);
      }
      projectsArray.forEach((element) => {
       const projectsDisplay = document.createElement("div");
        projectsDisplay.classList.add("projectsDisplay");
        projectsDisplay.setAttribute(
          "data-id",
          element.id.toString());
        mainContentContainer.appendChild(projectsDisplay);
        const projectsText = document.createElement("div");
        projectsText.classList.add("projectsText");
        projectsText.textContent = element.title;
        projectsDisplay.appendChild(projectsText)
        const projectsDisplayRightContainer = document.createElement('div');
        projectsDisplayRightContainer.classList.add('projectsDisplayRightContainer')
        const projectsEditIconContainer = document.createElement('div');
        projectsEditIconContainer.classList.add('projectsEditIconContainer')
        const projectsEditIcon = document.createElement('i');
        projectsEditIcon.classList.add("fa-solid");
        projectsEditIcon.classList.add("fa-pen");
        projectsEditIcon.setAttribute("id", "projectsEditIcon")
        const projectsDeleteButton = document.createElement("button");
        projectsDeleteButton.classList.add("projectsDeleteButton");
        projectsDeleteButton.textContent = "Del";
        projectsDisplay.appendChild(projectsDisplayRightContainer);
        projectsDisplayRightContainer.appendChild(projectsEditIconContainer);
        projectsEditIconContainer.appendChild(projectsEditIcon);
        projectsDisplayRightContainer.appendChild(projectsDeleteButton);
  
        const renderEditProjectModal = (() => {
          projectsDisplay.addEventListener("click", (e) => {
            if (e.target.className === "projectsText" || e.target.id === "projectsEditIcon") {
              editProjectTitle.value =
                element.title;
              editProjectModalContainer.classList.add("show");
              editSubmitProject.setAttribute("data-id", e.target.closest('.projectsDisplay').dataset.id);
            }
          });
        })();
      });
    },
    renderProjectsSidebar: (projectsArray) => {
      while (projectsContainer.firstChild) {
        projectsContainer.removeChild(projectsContainer.firstChild);
      }
      projectsArray.forEach((element) => {
        const projectsSidebarButton = document.createElement("button");
        projectsSidebarButton.classList.add("projectsSidebarButton");
        projectsSidebarButton.textContent = element.title;
        projectsSidebarButton.setAttribute(
          "data-id",
          element.id.toString()
        );
        projectsContainer.appendChild(projectsSidebarButton);
      });
    },
    renderCurrentProject(currentProject) {
      mainContainerTopText.textContent = currentProject.title;
    },
    renderTasks(taskArray) {
      while (mainContentContainer.firstChild) {
        mainContentContainer.removeChild(mainContentContainer.firstChild);
      }
      taskArray.forEach((element) => {
        const tasksDisplay = document.createElement("div");
        tasksDisplay.classList.add("tasksDisplay");
        tasksDisplay.setAttribute(
          "data-id",
          element.id.toString());
        mainContentContainer.appendChild(tasksDisplay);
        const tasksDisplayLeftContainer = document.createElement('div');
        tasksDisplayLeftContainer.classList.add('tasksDisplayLeftContainer')
        const tasksText = document.createElement("div");
        tasksText.classList.add("tasksText");
        tasksText.textContent = element.title;
        const tasksCheckBox = document.createElement("div");
        tasksCheckBox.classList.add("tasksCheckBox");
        const tasksDisplayRightContainer = document.createElement('div');
        tasksDisplayRightContainer.classList.add('tasksDisplayRightContainer')
        const tasksEditIconContainer = document.createElement('div');
        tasksEditIconContainer.classList.add('tasksEditIconContainer');
        const tasksEditIcon = document.createElement("span");
        tasksEditIcon.classList.add("fa-solid");
        tasksEditIcon.classList.add("fa-pen");
        tasksEditIcon.setAttribute("id", "tasksEditIcon")
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
          element.id.toString());
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
              document.querySelector(`[data-dropdown="${element.id.toString()}"]`).classList.toggle("showDropdown");
            }
          });
        })();
        const displayCompleteStatus = (() => {
          if (element.complete === true) {
            tasksText.style.textDecoration = "line-through";
            tasksCheckBox.style.backgroundColor = "#32fbe2";
          }
        })();
  
        const displayPriorityStatus = (() => {
          switch (element.priority) {
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
            if (e.target.className === "tasksText" || e.target.id === "tasksEditIcon") {
              editTaskTitle.value =
                element.title;
              editTaskDescription.value =
                element.description;
              editTaskDueDate.value =
                element.dueDate;
              editTaskNotes.value =
                element.notes;
              editTaskModalContainer.classList.add("show");
              editSubmitTask.setAttribute(
                "data-id",
                element.id.toString());
            }
          });
        })();
      });
    },

    renderNewProjectModal: () => {
      newProjectButton.addEventListener("click", () => {
        projectModalContainer.classList.add("show");
      });
    },
    renderNewTaskModal: () => {
      newTaskButton.addEventListener("click", () => {
        taskModalContainer.classList.add("show");
        taskTitle.focus();
        taskDueDate.valueAsDate = new Date();
      });
    },
    clickOutsideCloseModal: () => {
      window.onclick = function (event) {
        if (event.target === document.querySelector("#task-modal-container")) {
          document
            .querySelector("#task-modal-container")
            .classList.remove("show");
        }
        if (
          event.target === document.querySelector("#edit-task-modal-container")
        ) {
          document
            .querySelector("#edit-task-modal-container")
            .classList.remove("show");
        }
        if (
          event.target === document.querySelector(".project-modal-container")
        ) {
          document
            .querySelector(".project-modal-container")
            .classList.remove("show");
        }
        if (
          event.target ===
          document.querySelector(".edit-project-modal-container")
        ) {
          document
            .querySelector(".edit-project-modal-container")
            .classList.remove("show");
        }
      };
    },

////////////////////EVENT LISTENERS/////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
    handleNewProjectEventListener: (storeProjectInFireStore) => {
      submitProject.addEventListener("click", (e) => {
        e.preventDefault();
        storeProjectInFireStore(projectTitle.value);
        projectForm.reset();
        projectModalContainer.classList.remove("show");
        newTaskButton.classList.remove("hide");
      })
    },
    
    handleDeleteProjectEventListener:(deleteProject) => {
      mainContentContainer.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.className === "projectsDeleteButton") {
          deleteProject(e.target.closest(".projectsDisplay").dataset.id);
          e.target.closest(".projectsDisplay").remove();
        }
      });
    },
    
    handleEditProjectEventListener:(editProjectInArray) => {
      editSubmitProject.addEventListener("click", (e) => {
        e.preventDefault();
        editProjectInArray(e.target.dataset.id, editProjectTitle.value);
        editProjectModalContainer.classList.remove("show");
      });
    },
    
    handleAllProjectsEventListener:(showAllProjects) => {
      allProjects.addEventListener("click", (e) => {
        topText.textContent = "All Projects";
        newTaskButton.style.display = 'none';
        topText.style.textAlign = 'center;'
        showAllProjects();
      });
    },
    
    handleNewTaskEventListener: (storeTaskInFirestore) => {
      submitTask.addEventListener("click", (e) => {
        e.preventDefault();
        storeTaskInFirestore(
          taskTitle.value,
          taskDescription.value,
          taskDueDate.value,
          taskNotes.value,
          currentProjectId
          );
        taskForm.reset();
        taskModalContainer.classList.remove("show");
      });
    },
    
      handleDeleteTaskEventListener:(deleteTaskFromFirestore) => {
        mainContentContainer.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.className === "tasksDeleteButton") {
          deleteTaskFromFirestore(e.target.closest(".tasksDisplay").dataset.id);
          e.target.closest(".tasksDisplay").remove();
        }
      });
    },
    
    handleEditTaskEventListener:(editTaskInFirestore) => {
      editSubmitTask.addEventListener("click", (e) => {
        e.preventDefault();
        editTaskInFirestore(
          e.target.dataset.id,
          editTaskTitle.value,
          editTaskDescription.value,
          editTaskDueDate.value,
          editTaskNotes.value
        );
        editTaskModalContainer.classList.remove("show");
        if (
          topText.textContent === "Today" ||
          topText.textContent === "All Tasks"
        ) {
          newTaskButton.classList.add("hide");
        } else {
          newTaskButton.classList.remove("hide");
        }
      });
    },
    
    handleAllTasksEventListener:(showAllTasks) => {
      allTasks.addEventListener("click", (e) => {
        topText.textContent = "All Tasks";
        newTaskButton.style.display = 'none';
        showAllTasks();
      });
    },
    
    handleUpdateTaskCompleteStatus:(updateTaskCompleteStatus) => {
      mainContentContainer.addEventListener("click", (e) => {
        e.preventDefault();
        if (
          e.target.className === "tasksCheckBox" &&
          e.target.style.backgroundColor === ""
          ) {
            updateTaskCompleteStatus(
              e.target.closest(".tasksDisplay").dataset.id,
              true
              );
            } else if (e.target.className === "tasksCheckBox") {
          updateTaskCompleteStatus(
            e.target.closest(".tasksDisplay").dataset.id,
            false
          );
        }
      });
    },
    
    handleUpdateTaskPriority:(updateTaskPriority) => {
      mainContentContainer.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.className === "lowPriority") {
          updateTaskPriority(
            e.target.closest(".tasksDisplay").dataset.id,
            "low"
          );
        } else if (e.target.className === "mediumPriority") {
          updateTaskPriority(
            e.target.closest(".tasksDisplay").dataset.id,
            "medium"
          );
        } else if (e.target.className === "highPriority") {
          updateTaskPriority(
            e.target.closest(".tasksDisplay").dataset.id,
            "high"
          );
        }
      });
    },
    
    handleUpdateTodayTasks:(updateTodayTasks) => {
      todayButton.addEventListener("click", (e) => {
        topText.textContent = "Today";
        newTaskButton.style.display = 'none';
        updateTodayTasks();
      });
    },
    
    handleUpdateCurrentProject:(updateCurrentProject) => {
      projectsContainer.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.className === "projectsSidebarButton") {
          newTaskButton.style.display = 'block';
          currentProjectId = (e.target.dataset.id);
          updateCurrentProject(e.target.dataset.id);
          topText.textContent = e.target.textContent;
        }
      });
    },
  };
})()