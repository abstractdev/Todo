export function createIdForArrayElements(array) {
  array.forEach((e) => {
      e.id = array.indexOf(e)
    })
}

export function createCurrentProjectId(array) {
  array.forEach((e) => {
      e.currentId = array.indexOf(e)
    })
}