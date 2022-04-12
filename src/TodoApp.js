import {Display} from "./Display.js";
import {Project} from "./Project.js"
import {Task} from "./Task.js"
import { createIdForArrayElements } from "./IdFunctions.js";
import {handleNewProjectEventListener, handleEditProjectEventListener, handleDeleteProjectEventListener, handleAllProjectsEventListener, handleNewTaskEventListener, handleDeleteTaskEventListener, handleEditTaskEventListener } from "./EventHandlers.js";
import {setProject, deleteProject, editProject, getSidebarProjects, getAllProjects, setTasks, deleteTask, editTask, getTasks } from "./FirebaseFunctions.js";

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
    getSidebarProjects()
  }
  const editProjectInFireStore = (id, title) =>{
    editProject(id, title);
    getAllProjects();
    getSidebarProjects();
  }
  

  const deleteProjectFromFirestore = (id) => {
    /////////deletes tasks associated with project /////////////
    // let temp = [];
    // let deletedProject = {};
    // temp = projectsArray.filter((e) => e.id === parseInt(id));
    // deletedProject = temp[0];
    // tasksArray = tasksArray.filter(
    //   (e) => e.projectId !== deletedProject.id
    // );
    //////deletes project/////////
    // projectsArray = projectsArray.filter((e) => e.id !== parseInt(id));
    deleteProject(id);
    // getAllProjects();
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
    createIdForArrayElements(tasksArray);
    deleteTask(id)
    getTasks();
  }

  const editTaskInArray = (id, title, description, dueDate, notes) => {
    console.log(tasksArray);
    tasksArray.forEach((e) => {
      if (parseInt(id) === parseInt(e.id)) {
        console.log('match');
        e.title = title;
        e.description = description;
        e.dueDate = dueDate;
        e.notes = notes;
      }
      createIdForArrayElements(tasksArray);
      editTask(id, title);
      getTasks();
    });
  }
  
  
  handleNewProjectEventListener(storeProjectInFireStore);
  handleDeleteProjectEventListener(deleteProjectFromFirestore);
  handleEditProjectEventListener(editProjectInFireStore);
  handleAllProjectsEventListener(showAllProjects);
  handleNewTaskEventListener(storeTaskInArray);
  handleDeleteTaskEventListener(deleteTaskFromArray);
  handleEditTaskEventListener(editTaskInArray)
};