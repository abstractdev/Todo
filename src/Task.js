function Task(id, title, projectId, description, dueDate, priority, notes, complete = false) {
  return {
    id,
    title,
    projectId,
    description,
    dueDate,
    priority,
    notes,
    complete,
    currentId,
    type: "task"
  }
}

export default Task