export const data = {
    projects: JSON.parse(localStorage.getItem('projects')) || [],
    set newProjects(project) {
        this.projects = project;
        this.updateStorage(project);
    },
    updateStorage(projects) {
        localStorage.setItem('projects', JSON.stringify(projects));
    }
}