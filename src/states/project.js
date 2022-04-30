function init() {
  return {
    projects: []
  }
}

function add(state, project) {
  return {
    projects: state.projects.concat(project)
  }
}

function fetch(_, projects) {
  return {
    projects
  }
}

function remove(state, project) {
  return {
    projects: state.projects.filter(({ id }) => id !== project.id)
  }
}

export default (store) => {
  store.on('@init', init)
  store.on('projects/add', add)
  store.on('projects/fetch', fetch)
  store.on('projects/remove', remove)
}
