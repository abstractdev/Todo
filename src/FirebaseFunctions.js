import { collection, addDoc, setDoc, doc, deleteDoc, query, getDocs, updateDoc} from "firebase/firestore"; 
import {getFirestore} from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import {Display} from "./Display"
import { createIdForArrayElements } from "./IdFunctions";

const firebaseConfig = {

  apiKey: "AIzaSyAjViD89jF0Ow8hmB38VvQPpIsqsIFLPXw",

  authDomain: "todo2-cf22a.firebaseapp.com",

  projectId: "todo2-cf22a",

  storageBucket: "todo2-cf22a.appspot.com",

  messagingSenderId: "46801332531",

  appId: "1:46801332531:web:9d6579e71f1d975b6a7646"

};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export async function getSidebarProjects() {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const temp = [];
      querySnapshot.forEach((doc) => {
        temp.push({...doc.data(), id: doc.id});
    });
    Display.renderProjectsSidebar(temp);
}
export async function getAllProjects() {
  const querySnapshot = await getDocs(collection(db, "projects"));
  const temp = [];
  querySnapshot.forEach((doc) => {
    temp.push({...doc.data(), id: doc.id});
  });
  Display.renderAllProjects(temp);
  }
export async function setProject(title) {
   const docRef = await addDoc(collection(db, "projects"), {
      title
    });
    getSidebarProjects()
  }
export async function deleteProject(id) {
  await deleteDoc(doc(db, "projects", `${id}`), {
    id
  });
  getSidebarProjects();
}
export async function editProject(id, title) {
  const ref = (doc(db, "projects", `${id}`))
  await updateDoc(ref, {
    id,
    title
  });
  getAllProjects();
  getSidebarProjects();
}

export async function getTasks() {
  console.log('a');
  const querySnapshot = await getDocs(collection(db, "tasks"));
  console.log('b');
  const temp = []
  querySnapshot.forEach((doc) => {
    temp.push({...doc.data(), id: doc.id});
  });
  Display.renderTasks(temp);
}
export async function setTask(title, description, dueDate, notes) {
  await addDoc(collection(db, "tasks"), {
    title,
    projectId: null,
    description,
    priority: null,
    dueDate,
    notes,
    complete: null
  });
  getTasks();
}
export async function deleteTask(id) {
  await deleteDoc(doc(db, "tasks", `${id}`), {
    id
  });
  getTasks();
}

export async function editTask(id, title) {
  const ref = (doc(db, "tasks", `${id}`))
  await updateDoc(ref, {
    title
  });
  getTasks();
}
export async function editTaskComplete(id, status) {
  const ref = (doc(db, "tasks", `${id}`))
  await updateDoc(ref, {
    complete: status
  });
  getTasks();
}
