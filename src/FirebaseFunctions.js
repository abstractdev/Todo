import {
  collection,
  addDoc,
  setDoc,
  doc,
  deleteDoc,
  query,
  where,
  getDocs,
  updateDoc,
  orderBy,
  serverTimestamp
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { Display } from "./Display";
import parseISO from "date-fns/parseISO";
import isToday from "date-fns/isToday";

const firebaseConfig = {
  apiKey: "AIzaSyAjViD89jF0Ow8hmB38VvQPpIsqsIFLPXw",

  authDomain: "todo2-cf22a.firebaseapp.com",

  projectId: "todo2-cf22a",

  storageBucket: "todo2-cf22a.appspot.com",

  messagingSenderId: "46801332531",

  appId: "1:46801332531:web:9d6579e71f1d975b6a7646",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const projectsRef = collection(db, "projects");
const tasksRef = collection(db, "tasks");

export async function getSidebarProjects() {
  const querySnapshot = await getDocs(query(projectsRef, orderBy("createdAt")));
  const temp = [];
  querySnapshot.forEach((doc) => {
    temp.push({ ...doc.data(), id: doc.id });
  });
  Display.renderProjectsSidebar(temp);
}
export async function getAllProjects() {
  const querySnapshot = await getDocs(query(projectsRef, orderBy("createdAt")));
  const temp = [];
  querySnapshot.forEach((doc) => {
    temp.push({ ...doc.data(), id: doc.id });
  });
  Display.renderAllProjects(temp);
}
export async function setProject(title) {
  const docRef = await addDoc(collection(db, "projects"), {
    title,
    createdAt: serverTimestamp()
  });
  getSidebarProjects();
}
export async function deleteProject(id) {
  await deleteDoc(doc(db, "projects", `${id}`), {
    id,
  });
  getSidebarProjects();
}
export async function editProject(id, title) {
  const ref = doc(db, "projects", `${id}`);
  await updateDoc(ref, {
    id,
    title,
  });
  getAllProjects();
  getSidebarProjects();
}

export async function getTasks() {
  const querySnapshot = await getDocs(query(tasksRef, orderBy("createdAt")));
  const temp = [];
  querySnapshot.forEach((doc) => {
    temp.push({ ...doc.data(), id: doc.id });
  });
  Display.renderTasks(temp);
}
export async function setTask(title, description, dueDate, notes, projectId) {
  await addDoc(collection(db, "tasks"), {
    title,
    projectId,
    description,
    priority: null,
    dueDate,
    notes,
    complete: null,
    createdAt: serverTimestamp()
  });
}
export async function deleteTask(id) {
  await deleteDoc(doc(db, "tasks", `${id}`), {
    id,
  });
  getTasks();
}

export async function editTask(id, title, description, dueDate, notes) {
  const ref = doc(db, "tasks", `${id}`);
  await updateDoc(ref, {
    title,
    description,
    dueDate,
    notes,
  });
  getTasks();
}
export async function editTaskComplete(id, status) {
  const ref = doc(db, "tasks", `${id}`);
  await updateDoc(ref, {
    complete: status,
  });
  getTasks();
}
export async function editTaskPriority(id, status) {
  const ref = doc(db, "tasks", `${id}`);
  await updateDoc(ref, {
    priority: status,
  });
  getTasks();
}

export async function showTodayTasks() {
  const querySnapshot = await getDocs(query(tasksRef, orderBy("createdAt")));
  const temp = [];
  querySnapshot.forEach((doc) => {
    temp.push({ ...doc.data(), id: doc.id });
  });

  const todayTaskArray = temp.filter((e) => {
    const parsedDate = parseISO(e.dueDate);
    return isToday(parsedDate);
  });
  Display.renderTasks(todayTaskArray);
}

export async function filterAndRenderCurrentProjectTasks(id) {
  const q = query(collection(db, "tasks"), where("projectId", "==", id), orderBy("createdAt"));
  const querySnapshot = await getDocs(q);
  const temp = [];
  querySnapshot.forEach((doc) => {
    temp.push({ ...doc.data(), id: doc.id });
  });
  Display.renderTasks(temp);
}
