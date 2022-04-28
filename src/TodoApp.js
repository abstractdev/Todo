import { Display } from "./Display.js";
import {
  setProject,
  deleteProject,
  editProject,
  getSidebarProjects,
  getAllProjects,
  setTask,
  deleteTask,
  editTask,
  getTasks,
  editTaskComplete,
  editTaskPriority,
  showTodayTasks,
  filterAndRenderCurrentProjectTasks,
} from "./FirebaseFunctions.js";

export const TodoApp = () => {
  const initModals = () => {
    Display.renderNewProjectModal();
    Display.renderNewTaskModal();
    Display.clickOutsideCloseModal();
  };

  const initDisplay = (() => {
    initModals();
    getSidebarProjects();
    getTasks();
    Display.initCurrentProject();
  })();

  const showAllProjects = () => {
    getAllProjects();
  };
  const storeProjectInFireStore = (title) => {
    setProject(title);
  };
  const editProjectInFireStore = (id, title) => {
    editProject(id, title);
  };
  const deleteProjectFromFirestore = (id) => {
    deleteProject(id);
  };

  const showAllTasks = () => {
    getTasks();
  };

  const storeTaskInFirestore = (
    title,
    description,
    dueDate,
    notes,
    currentProjectId
  ) => {
    setTask(title, description, dueDate, notes, currentProjectId);
    filterAndRenderCurrentProjectTasks(currentProjectId);
  };

  const deleteTaskFromFirestore = (id) => {
    deleteTask(id);
  };

  const editTaskInFirestore = (id, title, description, dueDate, notes) => {
    editTask(id, title, description, dueDate, notes);
  };

  const updateTaskCompleteStatus = (id, status) => {
    editTaskComplete(id, status);
  };
  const updateTaskPriority = (id, status) => {
    editTaskPriority(id, status);
  };

  const updateTodayTasks = () => {
    showTodayTasks();
  };

  const updateCurrentProject = (id) => {
    filterAndRenderCurrentProjectTasks(id);
  };

  Display.handleNewProjectEventListener(storeProjectInFireStore);
  Display.handleDeleteProjectEventListener(deleteProjectFromFirestore);
  Display.handleEditProjectEventListener(editProjectInFireStore);
  Display.handleAllProjectsEventListener(showAllProjects);
  Display.handleNewTaskEventListener(
    storeTaskInFirestore,
    updateCurrentProject
  );
  Display.handleDeleteTaskEventListener(deleteTaskFromFirestore);
  Display.handleEditTaskEventListener(editTaskInFirestore);
  Display.handleAllTasksEventListener(showAllTasks);
  Display.handleUpdateTaskCompleteStatus(updateTaskCompleteStatus);
  Display.handleUpdateTaskPriority(updateTaskPriority);
  Display.handleUpdateTodayTasks(updateTodayTasks);
  Display.handleUpdateCurrentProject(updateCurrentProject);
};
