function Project(id, title) {
  return {
    id,
    title,
    taskArray: [],
    type: 'project'
  };
}

export default Project;
