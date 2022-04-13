import {Display} from "./Display.js";
import {Project} from "./Project.js"
import {Task} from "./Task.js"
import {handleNewProjectEventListener, handleEditProjectEventListener, handleDeleteProjectEventListener, handleAllProjectsEventListener, handleNewTaskEventListener, handleDeleteTaskEventListener, handleEditTaskEventListener, handleAllTasksEventListener, handleUpdateTaskCompleteStatus } from "./EventHandlers.js";
import {setProject, deleteProject, editProject, getSidebarProjects, getAllProjects, setTask, deleteTask, editTask, getTasks, editTaskComplete } from "./FirebaseFunctions.js";

export const TodoApp = () => {
  
  const initModals = () => {
    Display.renderNewProjectModal();
    Display.renderNewTaskModal();
    Display.clickOutsideCloseModal();
  }

  const initDisplay = (() => {
    initModals()
    getSidebarProjects()
    getTasks()
    })()

  const showAllProjects = () => {
    getAllProjects()
  }
  const storeProjectInFireStore  = (title) =>{
    setProject(title);
  }
  const editProjectInFireStore = (id, title) =>{
    editProject(id, title);
  }
  const deleteProjectFromFirestore = (id) => {
    deleteProject(id);
    // getAllProjects();
  };

  const showAllTasks = () => {
    getTasks()
  }

  const storeTaskInFirestore = (title, description, dueDate, notes) => {
    setTask(title, description, dueDate, notes);
  }

  const deleteTaskFromFirestore = (id) => {
    deleteTask(id)
  }

  const editTaskInFirestore = (id, title, description, dueDate, notes) => {
      editTask(id, title, description, dueDate, notes);
    };

  const updateTaskCompleteStatus = (id, status) => {
      editTaskComplete(id, status);
      }

    handleNewProjectEventListener(storeProjectInFireStore);
    handleDeleteProjectEventListener(deleteProjectFromFirestore);
    handleEditProjectEventListener(editProjectInFireStore);
    handleAllProjectsEventListener(showAllProjects);
    handleNewTaskEventListener(storeTaskInFirestore);
    handleDeleteTaskEventListener(deleteTaskFromFirestore);
    handleEditTaskEventListener(editTaskInFirestore);
    handleAllTasksEventListener(showAllTasks);
    handleUpdateTaskCompleteStatus(updateTaskCompleteStatus);
}