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
        temp.push(doc.data());
    });
    console.log(temp);
    createIdForArrayElements(temp);
    Display.renderProjectsSidebar(temp);
}
export async function getAllProjects() {
  const querySnapshot = await getDocs(collection(db, "projects"));
    const temp = [];
      querySnapshot.forEach((doc) => {
        temp.push(doc.data());
    });
    console.log(temp);
    createIdForArrayElements(temp);
    Display.renderAllProjects(temp);
}

// export async function getTasks(renderTasks) {
//   const temp = []
//   const querySnapshot = await getDocs(collection(db, "tasks"));
//   querySnapshot.forEach((doc) => {
//     temp.push(doc.data());
//   });
//   const renderDbTasks = await renderTasks(temp)

// }

async function setProject(title, id) {
   const docRef = await setDoc(doc(db, "projects", `${id}`), {
      title
    });
  }
export function setProjects(projectArray) {
    projectArray.forEach(element => {
    setProject(element.title, element.id)
  });
}
export async function deleteProject(id) {
  await deleteDoc(doc(db, "projects", `${id}`), {
    id
  });
}
export async function editProject(id, title) {
  const ref = (doc(db, "projects", `${id}`))
  await updateDoc(ref, {
    title: title
  });
}
// async function setTask(title, id, projectId, description, priority, dueDate, notes, complete) {
//   await setDoc(doc(db, "tasks", `${id}`), {
//     title,
//     id,
//     projectId,
//     description,
//     priority,
//     dueDate,
//     notes,
//     complete
//   });
// }

// export function setTasks(taskArray) {
//    taskArray.forEach(element => {
//     setTask(element.title, element.id, element.projectId, element.description, element.priority, element.dueDate, element.notes, element.complete)
//   });
// }
// async function deleteTask(id) {
//   await deleteDoc(doc(db, "tasks", `${id}`), {
//     id
//   });
// }
// export function deleteTasks(id) {
//       deleteTask(id)
// }

// export async function getTasks() {
//   const querySnapshot = await getDocs(collection(db, "tasks"));
//   const temp = []
//     querySnapshot.forEach((doc) => {
//       Display.renderOneTask(doc)
//   });
// }