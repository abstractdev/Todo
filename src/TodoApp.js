import {Display} from "./Display.js";
import {Project} from "./Project.js"
import {Task} from "./Task.js"
import { createIdForArrayElements } from "./IdFunctions.js";
import {handleNewProjectEventListener, handleEditProjectEventListener, handleDeleteProjectEventListener, handleAllProjectsEventListener, handleNewTaskEventListener, handleDeleteTaskEventListener } from "./EventHandlers.js";
import {setProjects, deleteProject, editProject, getSidebarProjects, getAllProjects, setTasks, deleteTask, getTasks } from "./FirebaseFunctions.js";

export const TodoApp = () => {
  let projectsArray = [];
  let tasksArray = [];
  
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

  const storeProjectInArray  = (title) =>{
    const newProject = Project();
    projectsArray.push(newProject);
    createIdForArrayElements(projectsArray);
    newProject.title = title;
    setProjects(projectsArray);
    getSidebarProjects()
  }
  const editProjectInArray = (id, title) =>{
    projectsArray.forEach((e) => {
      if (parseInt(id) === e.id) {
        e.title = title;
        editProject(id, title)
      }
    });
    createIdForArrayElements(projectsArray);
    getAllProjects();
    getSidebarProjects();
  }
  

  const deleteProjectFromArray = (id) => {
    /////////deletes tasks associated with project /////////////
    let temp = [];
    let deletedProject = {};
    temp = projectsArray.filter((e) => e.id === parseInt(id));
    deletedProject = temp[0];
    tasksArray = tasksArray.filter(
      (e) => e.projectId !== deletedProject.id
    );
    //////deletes project/////////
    projectsArray = projectsArray.filter((e) => e.id !== parseInt(id));
    console.log(projectsArray);
    createIdForArrayElements(projectsArray);
    deleteProject(id);
    getAllProjects();
    getSidebarProjects();
  };

  const storeTaskInArray = (title, description, dueDate, notes) => {
    let newTask = Task();
    newTask.title = title;
    newTask.description = description;
    newTask.dueDate = dueDate;
    newTask.notes = notes;
    tasksArray.push(newTask);
    createIdForArrayElements(tasksArray);
    setTasks(tasksArray);
    getTasks();
  }

  const deleteTaskFromArray = (id) => {
    tasksArray = tasksArray.filter(function (e) {
      return e.id !== parseInt(id);
    });
    // currentProject.array = currentProject.array.filter(
    //   function (e) {
    //     return e.id !== parseInt(id);
    //   }
    // );
    // todasyTaskArray = todasyTaskArray.filter(function (e) {
    //   return e.id !== parseInt(id);
    // });
    deleteTask(id)
    createIdForArrayElements(tasksArray);
    getTasks();
  }
  
  handleNewProjectEventListener(storeProjectInArray);
  handleDeleteProjectEventListener(deleteProjectFromArray);
  handleEditProjectEventListener(editProjectInArray);
  handleAllProjectsEventListener(showAllProjects);
  handleNewTaskEventListener(storeTaskInArray);
  handleDeleteTaskEventListener(deleteTaskFromArray);
}